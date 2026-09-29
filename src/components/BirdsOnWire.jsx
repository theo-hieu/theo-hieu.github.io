import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// To switch back to crows, use the saved array and crow SVG block below
// in place of the chicken array and chicken SVG block.
/* const birds = [
  { name: "Experience", href: "#experience", headY: 57, shape: "M38 128C40 112 47 94 55 80C60 71 57 61 61 53C65 44 78 44 84 51C88 55 88 62 84 68L79 74C77 83 80 93 77 105C74 120 65 131 54 135Z" },
  { name: "Resume", href: "/Theodore_Nguyen_Resume.pdf", headY: 48, shape: "M40 128C42 111 49 92 56 76C61 64 57 53 62 44C67 35 79 36 85 43C89 48 88 54 84 59L79 65C76 80 81 92 77 105C74 120 66 131 55 135Z" },
  { name: "Projects", href: "#projects", headY: 64, shape: "M37 128C39 113 46 97 54 85C61 77 60 67 64 60C69 51 81 52 87 59C91 64 90 70 85 75L79 80C78 89 81 99 76 111C72 123 63 132 53 135Z" },
]; */

const birds = [
  { name: "Experience", href: "#experience", headY: 57 },
  { name: "Resume", href: "/Theodore_Nguyen_Resume.pdf", headY: 48 },
  { name: "Projects", href: "#projects", headY: 64 },
];

export default function BirdsOnWire() {
  const [egg, setEgg] = useState(null);
  const [resumeBlocked, setResumeBlocked] = useState(false);
  const activeBird = useRef(null);
  const timer = useRef(null);
  const eggElement = useRef(null);

  useEffect(() => {
    if (!egg || egg.flying) return;
    const element = eggElement.current;
    const section = document.getElementById(egg.href.slice(1));
    const heading = section?.querySelector("h2");
    if (!element || !heading) return;
    const startScroll = window.scrollY;
    const startY = egg.y + startScroll;
    const startTime = performance.now();
    let frame;

    function fall(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, Math.max(0, (elapsed - 180) / 1200));
      const eased = progress * progress * (3 - 2 * progress);
      const bounds = heading.getBoundingClientRect();
      const landingY = bounds.top + window.scrollY - egg.size * .8;
      const sectionY = section.getBoundingClientRect().top + window.scrollY;
      const destinationScroll = Math.max(0, Math.min(
        sectionY - 88,
        document.documentElement.scrollHeight - window.innerHeight,
      ));
      window.scrollTo({ top: startScroll + (destinationScroll - startScroll) * eased, behavior: "instant" });
      const y = startY + (landingY - startY) * eased - window.scrollY;
      element.style.transform = `translateY(${y - egg.y}px)`;
      element.style.opacity = String(Math.min(1, elapsed / 120) * Math.max(0, 1 - (elapsed - 1880) / 200));
      if (progress === 1) element.classList.add("is-splat");
      if (elapsed < 2080) frame = window.requestAnimationFrame(fall);
      else egg.onLand();
    }
    frame = window.requestAnimationFrame(fall);
    return () => window.cancelAnimationFrame(frame);
  }, [egg]);

  useEffect(() => () => {
    window.clearTimeout(timer.current);
    activeBird.current = null;
  }, []);

  function navigateToSection(href) {
    if (window.location.hash === href) {
      document.getElementById(href.slice(1))?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
    } else {
      window.location.assign(href);
    }
  }

  function finishNavigation(landed = false) {
    const bird = activeBird.current;
    if (!bird) return;
    activeBird.current = null;
    window.clearTimeout(timer.current);
    setEgg(null);

    if (bird.name === "Resume") {
      // Keep the handle to detect blocking; detach the opener before loading the PDF.
      const tab = window.open("about:blank", "_blank");
      if (tab) {
        tab.opener = null;
        tab.location.replace(bird.href);
      } else {
        setResumeBlocked(true);
      }
    } else if (landed) {
      if (window.location.hash !== bird.href) window.history.pushState(null, "", bird.href);
    } else {
      navigateToSection(bird.href);
    }
  }

  function handleBirdClick(event, bird) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (activeBird.current) {
      event.preventDefault();
      return;
    }
    setResumeBlocked(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (bird.name !== "Resume") {
        event.preventDefault();
        navigateToSection(bird.href);
      }
      return;
    }
    event.preventDefault();

    // SVG coordinates keep the egg anchored beneath the rear at every screen size.
    const art = event.currentTarget.querySelector(".bird-art");
    const origin = art.createSVGPoint();
    origin.x = 24 + 36 * 0.6;
    origin.y = 62 + 130 * 0.6;
    const matrix = art.getScreenCTM();
    const position = origin.matrixTransform(matrix);
    const scale = Math.hypot(matrix.a, matrix.b);
    activeBird.current = bird;
    setEgg({
      name: bird.name,
      x: position.x,
      y: position.y,
      size: Math.max(36, 48 * scale),
      flying: bird.name === "Resume",
      href: bird.href,
      onLand: () => finishNavigation(true),
    });
    // Animation-end is primary; this also recovers if animations are disabled mid-flight.
    timer.current = window.setTimeout(finishNavigation, bird.name === "Resume" ? 1650 : 2700);
  }

  return (
    <nav className="bird-scene" aria-label="Explore Theo’s portfolio">
      <svg className="bird-backdrop" viewBox="0 0 600 440" aria-hidden="true" focusable="false">
        <g className="utility-pole utility-pole-distant">
          <path className="pole-wood" d="M7 280H18L22 1400H3Z" />
          <path className="pole-grain" d="M12 326L11 1400" />
          <path className="pole-brace" d="M-4 318L13 345L39 318" />
          <path className="pole-wood" d="M-10 309H45V318H-10Z" />
          <path className="pole-pin" d="M0 290V310M35 293V310" />
          <path className="pole-insulator" d="M-5 287H5V300H-5ZM30 290H40V302H30Z" />
        </g>
        <g className="utility-pole">
          <path className="pole-wood" d="M571 267H588L594 1400H565Z" />
          <path className="pole-grain" d="M576 331L573 1400M583 390L587 1400" />
          <path className="pole-brace" d="M535 319L580 361L600 319" />
          <path className="pole-wood" d="M521 308H610V321H521Z" />
          <path className="pole-pin" d="M533 284V309M600 284V309" />
          <path className="pole-insulator" d="M527 283H539V299H527ZM594 283H606V299H594Z" />
          <path className="pole-hardware" d="M526 288H540M526 294H540M593 288H607M593 294H607" />
          <circle className="pole-bolt" cx="580" cy="314" r="2.5" />
        </g>
        <path className="bird-wire" d="M0 290Q300 330 600 290" />
      </svg>
      {birds.map((bird, index) => (
        <a
          key={bird.name}
          className={`bird-link bird-link-${index + 1}${egg?.name === bird.name ? " is-laying" : ""}`}
          href={bird.href}
          onClick={(event) => handleBirdClick(event, bird)}
          aria-label={bird.name === "Resume" ? "Resume (PDF, opens in a new tab)" : bird.name}
          target={bird.name === "Resume" ? "_blank" : undefined}
          rel={bird.name === "Resume" ? "noopener noreferrer" : undefined}
        >
          <span className="bird-bubble" aria-hidden="true">{bird.name}</span>
          <svg className="bird-art" viewBox="0 0 120 160" aria-hidden="true" focusable="false">
            <g transform="translate(24 62) scale(0.6)">
              <g className="bird-character">
                {/* Chicken SVG: replace this group with the crow block to switch back. */}
                <g className="chicken">
                  <path className="chicken-tail" d="M42 105C24 107 13 88 16 76Q26 77 35 93Q24 70 31 64Q43 69 47 91Q46 76 54 75L59 111Z" />
                  <path className="chicken-feet" d="M50 130L51 151M43 155L51 151L58 155M69 129L69 151M61 155L69 151L77 155" />
                  <path className="chicken-body" d={`M30 105Q31 91 48 92Q61 92 63 ${bird.headY + 14}L85 ${bird.headY + 13}Q87 85 91 100C100 121 79 138 58 136C41 135 28 121 30 105Z`} />
                  <path className="chicken-wing" d="M42 103C51 95 69 99 76 108Q67 129 49 121Q41 117 42 103Z" />
                  <path className="chicken-feathers" d="M49 108Q55 119 68 111" />
                  <g transform={`translate(0 ${bird.headY - 57})`}>
                    <path className="chicken-comb" d="M63 50C56 44 59 35 65 40C63 29 73 27 75 39C81 28 89 35 83 44Q91 43 89 51Z" />
                    <path className="chicken-wattle" d="M80 66C91 67 93 82 85 83C78 83 77 75 80 66Z" />
                    <path className="chicken-body" d="M61 57C60 42 83 40 88 54Q93 66 82 76L65 79Z" />
                    <circle className="bird-eye" cx="80" cy="57" r="2.5" />
                    <circle className="bird-eye-glint" cx="80.6" cy="56.3" r="0.8" />
                    <g className="chicken-beak" style={{ transformOrigin: "87px 64px" }}>
                      <path className="beak-upper" d="M87 59L101 65L87 65Z" />
                      <path className="beak-lower" d="M87 65L101 65L88 70Z" />
                    </g>
                  </g>
                </g>
                {/* Original crow SVG (kept for an easy switch back):
                <path className="bird-tail" d="M44 113L13 153Q18 157 27 156L57 128Z" />
                <path className="bird-feet" d="M53 129L55 142L51 153M45 155L51 153L57 155M67 126L69 140L66 153M60 155L66 153L73 155" />
                <path className="bird-body" d={bird.shape} />
                <path className="bird-wing" d="M60 84C72 84 71 100 63 113C56 124 45 133 35 139C41 122 45 96 60 84Z" />
                <path className="crow-feathers" d="M63 96Q59 116 43 130" />
                <circle className="bird-eye" cx="79" cy={bird.headY} r="2.2" />
                <circle className="bird-eye-glint" cx="79.5" cy={bird.headY - 0.5} r="0.65" />
                <g className="bird-beak" style={{ transformOrigin: `83px ${bird.headY + 7}px` }}>
                  <path className="beak-upper" d={`M82 ${bird.headY + 2}Q96 ${bird.headY + 1} 107 ${bird.headY + 9}L82 ${bird.headY + 7}Z`} />
                  <path className="beak-lower" d={`M82 ${bird.headY + 7}L107 ${bird.headY + 9}Q95 ${bird.headY + 12} 83 ${bird.headY + 11}Z`} />
                </g>
                */}
              </g>
            </g>
          </svg>
        </a>
      ))}
      <div className="resume-egg-status" role="status" aria-live="polite">
        {resumeBlocked && (
          <>
            <span>Your resume is ready. </span>
            <a href={birds[1].href} target="_blank" rel="noopener noreferrer">Open resume</a>
          </>
        )}
      </div>
      {egg && createPortal(
        <div className="egg-overlay" aria-hidden="true">
          <div
            ref={eggElement}
            className={`laid-egg${egg.flying ? " laid-egg-flying" : " laid-egg-falling"}`}
            style={{
              left: egg.x,
              top: egg.y,
              width: egg.size,
              height: egg.size,
              "--egg-flight-x": `${window.innerWidth - egg.x + egg.size * 2}px`,
              "--egg-flight-y": `${-egg.y - egg.size * 2}px`,
            }}
            onAnimationEnd={(event) => {
              if (event.target === event.currentTarget) finishNavigation();
            }}
          >
            <svg viewBox="0 0 64 64" focusable="false">
              {egg.flying && (
                <g className="egg-wings">
                  <path className="egg-wing egg-wing-left" d="M25 34C16 34 8 26 4 15Q0 27 8 36Q1 34 4 40Q11 48 25 43Z" />
                  <path className="egg-wing egg-wing-right" d="M39 34C48 34 56 26 60 15Q64 27 56 36Q63 34 60 40Q53 48 39 43Z" />
                </g>
              )}
              <path className="egg-shell" d="M32 17C25 17 20 32 20 40C20 55 44 55 44 40C44 32 39 17 32 17Z" />
              <path className="egg-shine" d="M28 27Q24 33 25 38" />
              {!egg.flying && (
                <g className="egg-splat">
                  <path className="egg-white" d="M10 47Q0 40 13 39L22 42Q25 33 31 41Q40 34 43 42Q61 37 62 45Q67 51 49 53Q48 61 35 56Q22 63 18 55Q0 57 3 51Z" />
                  <ellipse className="egg-yolk" cx="32" cy="48" rx="11" ry="6" />
                  <path className="egg-shine" d="M27 46Q30 43 35 45" />
                  <path className="egg-shell-piece" d="M12 42L10 32L17 35L21 31L23 42Z" />
                  <path className="egg-shell-piece" d="M43 43L45 34L50 38L55 35L54 45Z" />
                  <circle className="egg-white" cx="3" cy="35" r="2.5" />
                  <circle className="egg-yolk" cx="59" cy="31" r="2" />
                </g>
              )}
            </svg>
          </div>
        </div>,
        document.body,
      )}
    </nav>
  );
}
