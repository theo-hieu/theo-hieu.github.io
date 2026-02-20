// src/pages/Experience.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { experiences } from "../data/experience";
import { Link } from "react-router-dom";

import { DataSet } from "vis-data";
import { Timeline } from "vis-timeline/standalone";

// ---------- Stacked (card) timeline item ----------
function TimelineItem({ item, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
    >
      <div className="timeline-dot" aria-hidden="true" />
      <div className="timeline-card box">
        <p className="has-text-grey is-size-7 mb-2">
          {item.start} — {item.end} • {item.location}
        </p>

        <h2 className="title is-5 mb-1">{item.role}</h2>
        <p className="subtitle is-6 mt-0">{item.company}</p>

        {item.description ? <p className="mb-3">{item.description}</p> : null}

        {item.bullets?.length ? (
          <ul>
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        ) : null}

        {item.tags?.length ? (
          <div className="tags mt-3">
            {item.tags.map((t) => (
              <span key={t} className="tag is-dark">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// ---------- Vis Timeline Overlap View (month-only axis) ----------
function VisOverlapTimeline({ items }) {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  // Snap a date to the first day of its month (prevents time-of-day showing up)
  const snapToMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);

  const { visItems, rangeStart, rangeEnd } = useMemo(() => {
    const now = new Date();

    const visItems = items
      .map((e) => {
        if (!e.startDate) return null;

        const startRaw = new Date(e.startDate);
        const endRaw = e.endDate ? new Date(e.endDate) : now;

        if (Number.isNaN(startRaw.getTime()) || Number.isNaN(endRaw.getTime()))
          return null;

        const start = snapToMonth(startRaw);
        const end = snapToMonth(endRaw);

        // Title-only on the bar; tooltip is month/year text only (no GMT time)
        const content = e.role;
        const title = `${e.role} — ${e.company}<br/>${e.start} — ${e.end}`;

        return {
          id: e.id,
          content,
          start,
          end,
          title,
          type: "range",
          className: "vis-item-theo",
        };
      })
      .filter(Boolean);

    const min = new Date(Math.min(...visItems.map((x) => x.start.getTime())));
    const max = new Date(Math.max(...visItems.map((x) => x.end.getTime())));

    // pad the visible window by 2 months on both sides
    const paddedMin = new Date(min.getFullYear(), min.getMonth() - 2, 1);
    const paddedMax = new Date(max.getFullYear(), max.getMonth() + 2, 1);

    return { visItems, rangeStart: paddedMin, rangeEnd: paddedMax };
  }, [items]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Destroy previous instance (toggle/hot reload safety)
    if (timelineRef.current) {
      timelineRef.current.destroy();
      timelineRef.current = null;
    }

    const dataset = new DataSet(visItems);

    const options = {
      // Core
      stack: true, // overlaps go into separate rows automatically
      orientation: "top",
      start: rangeStart,
      end: rangeEnd,

      // Make the axis MONTH-ONLY (prevents day/hour ticks)
      timeAxis: { scale: "month", step: 1 },

      // Prevent zooming into days/hours
      zoomMin: 1000 * 60 * 60 * 24 * 28, // ~1 month
      zoomMax: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years

      // Remove the red "current time" line and its time label
      showCurrentTime: false,

      // Labels (use month + year only)
      showMajorLabels: true,
      showMinorLabels: true,
      // vis-timeline expects moment-style tokens here; this keeps it clean
      format: {
        minorLabels: { month: "MMM" }, // Jan, Feb, ...
        majorLabels: { year: "YYYY" }, // 2023, 2024, ...
      },

      // UX
      horizontalScroll: true,
      zoomKey: "ctrlKey",
      margin: { item: 12, axis: 10 },
      tooltip: { followMouse: true, overflowMethod: "flip" },
    };

    timelineRef.current = new Timeline(el, dataset, options);

    // Optional: keep it at a sensible zoom so month labels look good
    // (comment out if you don’t want it)
    timelineRef.current.setWindow(rangeStart, rangeEnd, { animation: false });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.destroy();
        timelineRef.current = null;
      }
    };
  }, [visItems, rangeStart, rangeEnd]);

  return (
    <div className="box">
      <p className="has-text-grey is-size-7 mb-3">
        Tip: Scroll horizontally; Ctrl + mousewheel to zoom.
      </p>
      <div ref={containerRef} style={{ height: 360 }} />
    </div>
  );
}

export default function Experience() {
  const [view, setView] = useState("cards"); // "cards" | "overlap"

  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap">
            <div>
              <h1 className="title mb-1">Experience</h1>
              <p className="subtitle mb-0">
                Toggle between detailed cards and an overlap timeline.
              </p>
            </div>

            <div className="buttons has-addons mt-3">
              <button
                className={`button ${view === "cards" ? "is-link" : ""}`}
                onClick={() => setView("cards")}
              >
                Cards
              </button>
              <button
                className={`button ${view === "overlap" ? "is-link" : ""}`}
                onClick={() => setView("overlap")}
              >
                Overlap Timeline
              </button>
            </div>
          </div>

          {view === "cards" ? (
            <div className="timeline">
              <div className="timeline-line" aria-hidden="true" />
              {experiences.map((e, idx) => (
                <TimelineItem key={e.id} item={e} index={idx} />
              ))}
            </div>
          ) : (
            <VisOverlapTimeline items={experiences} />
          )}

          <div className="mt-5">
            <Link className="button is-text" to="/">
              ← Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
