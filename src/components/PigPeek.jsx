import "./PigPeek.css";

export default function PigPeek() {
  return (
    <svg className="pig-peek" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
      <g stroke="#955d61" strokeWidth="2" strokeLinejoin="round">
        <path fill="#e7a3ac" d="M17 35Q5 23 10 9Q25 7 32 27M48 27Q55 7 70 9Q75 23 63 35" />
        <path fill="#cf7f90" stroke="none" d="M18 27Q13 20 15 15Q24 16 27 27M53 27Q56 16 65 15Q67 20 62 27" />
        <path fill="#efb7bc" d="M10 49C10 29 22 21 40 21S70 29 70 49C70 67 57 76 40 76S10 67 10 49Z" />
        <path fill="none" stroke="#f9d5d4" strokeLinecap="round" d="M20 36Q25 29 33 29" />
        <ellipse fill="#e99ca9" stroke="none" cx="21" cy="52" rx="7" ry="4" />
        <ellipse fill="#e99ca9" stroke="none" cx="59" cy="52" rx="7" ry="4" />
        <ellipse fill="#3d3034" stroke="none" cx="27" cy="43" rx="3" ry="4" />
        <ellipse fill="#3d3034" stroke="none" cx="53" cy="43" rx="3" ry="4" />
        <circle fill="#fff4ed" stroke="none" cx="28" cy="42" r="1" />
        <circle fill="#fff4ed" stroke="none" cx="54" cy="42" r="1" />
        <path fill="none" strokeLinecap="round" d="M35 66Q40 69 45 66" />
        <ellipse fill="#e9a0ad" cx="40" cy="56" rx="16" ry="11" />
        <ellipse fill="#955d61" stroke="none" cx="34" cy="56" rx="2.5" ry="3.5" />
        <ellipse fill="#955d61" stroke="none" cx="46" cy="56" rx="2.5" ry="3.5" />
      </g>
    </svg>
  );
}
