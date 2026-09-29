import { useEffect, useMemo, useRef, useState } from "react";
import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";
import { experiences } from "../data/experience";

function CompanyIcon({ item }) {
  if (!item.companyIcon) return null;

  return <img className="company-icon" src={`${import.meta.env.BASE_URL}${item.companyIcon}`} alt="" width="36" height="36" loading="lazy" />;
}

function ExperienceDetails({ item, compact = false }) {
  return (
    <div className={compact ? "experience-card timeline-selection" : "experience-card"}>
      <p className="experience-meta">{item.start} - {item.end} / {item.location}</p>
      <h3>{item.role}</h3>
      <p className="experience-company"><CompanyIcon item={item} /><span>{item.company}</span></p>
      {item.description ? <p>{item.description}</p> : null}
      {item.bullets?.length ? <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
      {item.tags?.length ? <div className="tag-list">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div> : null}
    </div>
  );
}

function ExperienceCard({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && ref.current?.classList.add("is-visible"), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <article ref={ref} className={`timeline-item ${index % 2 ? "right" : "left"}`}><div className="timeline-dot" aria-hidden="true" /><ExperienceDetails item={item} /></article>;
}

function OverlapTimeline({ items }) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [selectedId, setSelectedId] = useState(items[0].id);
  const [hoveredId, setHoveredId] = useState(null);
  const activeItem = items.find((item) => item.id === (hoveredId || selectedId)) || items[0];

  const { visItems, rangeStart, rangeEnd } = useMemo(() => {
    const now = new Date();
    const snapToMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
    const timelineItems = items.map((item) => ({
      id: item.id,
      content: item.role,
      start: snapToMonth(new Date(item.startDate)),
      end: snapToMonth(item.endDate ? new Date(item.endDate) : now),
      title: `${item.role} - ${item.company}`,
      type: "range",
      className: "vis-item-theo",
    }));
    const start = new Date(Math.min(...timelineItems.map((item) => item.start.getTime())));
    const end = new Date(Math.max(...timelineItems.map((item) => item.end.getTime())));
    return { visItems: timelineItems, rangeStart: new Date(start.getFullYear(), start.getMonth() - 2, 1), rangeEnd: new Date(end.getFullYear(), end.getMonth() + 2, 1) };
  }, [items]);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const options = { stack: true, selectable: true, orientation: "top", start: rangeStart, end: rangeEnd, timeAxis: { scale: "month", step: 1 }, zoomMin: 1000 * 60 * 60 * 24 * 28, zoomMax: 1000 * 60 * 60 * 24 * 365 * 10, showCurrentTime: false, format: { minorLabels: { month: "MMM" }, majorLabels: { year: "YYYY" } }, horizontalScroll: true, zoomKey: "ctrlKey", margin: { item: 12, axis: 10 } };
    const timeline = new Timeline(containerRef.current, new DataSet(visItems), options);
    timelineRef.current = timeline;
    timeline.on("select", ({ items: selectedItems }) => selectedItems[0] && setSelectedId(selectedItems[0]));
    timeline.on("itemover", ({ item }) => setHoveredId(item));
    timeline.on("itemout", () => setHoveredId(null));
    timeline.setSelection([items[0].id]);
    return () => timeline.destroy();
  }, [visItems, rangeStart, rangeEnd, items]);

  const chooseExperience = (id) => {
    setSelectedId(id);
    timelineRef.current?.setSelection([id], { focus: false });
  };

  return (
    <section className="overlap-timeline">
      <p className="timeline-tip">Hover or click a role to see its details. Scroll horizontally to explore.</p>
      <div ref={containerRef} className="vis-container" />
      <div className="timeline-choices" aria-label="Choose an experience">
        {items.map((item) => <button type="button" className={item.id === selectedId ? "is-active" : ""} onClick={() => chooseExperience(item.id)} key={item.id}><CompanyIcon item={item} /><span>{item.company}</span></button>)}
      </div>
      <ExperienceDetails item={activeItem} compact />
    </section>
  );
}

export default function Experience() {
  const [view, setView] = useState("cards");
  return (
    <section className="page-section section-divider" id="experience">
      <div className="site-container">
        <div className="experience-heading">
          <div className="page-heading"><p className="eyebrow">Career path</p><h2>Experience</h2><p>Building software and learning tools where reliability, clarity, and patient outcomes matter.</p></div>
          <div className="segmented-control" role="group" aria-label="Experience display"><button className={view === "cards" ? "is-active" : ""} type="button" aria-pressed={view === "cards"} onClick={() => setView("cards")}>Detailed cards</button><button className={view === "overlap" ? "is-active" : ""} type="button" aria-pressed={view === "overlap"} onClick={() => setView("overlap")}>Overlap timeline</button></div>
        </div>
        {view === "cards" ? <div className="timeline"><div className="timeline-line" aria-hidden="true" />{experiences.map((item, index) => <ExperienceCard item={item} index={index} key={item.id} />)}</div> : <OverlapTimeline items={experiences} />}
      </div>
    </section>
  );
}
