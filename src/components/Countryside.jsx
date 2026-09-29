import { useId } from "react";

export default function Countryside() {
  const wheatId = useId();

  return (
    <div className="countryside" aria-hidden="true">
      <svg className="countryside-sky" viewBox="0 0 200 200" focusable="false">
        <g className="sky-sun">
          <circle className="sun-glow" cx="100" cy="100" r="88" />
          <circle className="sun-disc" cx="100" cy="100" r="49" />
          <path className="sun-rays" d="M100 30V19M100 181V170M30 100H19M181 100H170M50 50L42 42M158 158L150 150M150 50L158 42M42 158L50 150" />
        </g>
        <g className="sky-moon">
          <path className="moon-disc" d="M125 52A53 53 0 1 0 151 130A48 48 0 0 1 125 52Z" />
          <path className="sky-stars" d="M30 42V54M24 48H36M169 151V165M162 158H176M167 34V42M163 38H171" />
          <circle className="star-dot" cx="47" cy="146" r="2" />
          <circle className="star-dot" cx="151" cy="81" r="2" />
        </g>
      </svg>
      <svg className="countryside-fields" viewBox="0 0 1440 340" preserveAspectRatio="none" focusable="false">
        <path className="field-distant" d="M0 100Q200 14 460 96T930 77T1440 68V340H0Z" />
        <path className="field-middle" d="M0 155Q260 230 540 142T1050 151T1440 140V340H0Z" />
        <path className="field-near" d="M0 250Q410 157 790 250T1440 229V340H0Z" />
        <g className="field-furrows">
          <path d="M650 340Q845 228 1115 193M870 340Q1000 254 1190 218M1110 340Q1220 273 1380 247" />
        </g>
      </svg>
      <svg className="countryside-barn" viewBox="0 0 320 270" focusable="false">
        <ellipse className="barn-shadow" cx="163" cy="246" rx="149" ry="14" />
        <path className="barn-side" d="M177 91L289 122V239L177 247Z" />
        <path className="barn-front" d="M35 127L56 66L112 27L169 66L192 127V246H35Z" />
        <path className="barn-roof" d="M112 27L218 53L269 88L300 128L192 127L169 66Z" />
        <path className="barn-siding" d="M49 130V240M65 125V240M81 126V239M145 125V240M163 126V239M180 132V239M213 143V236M238 151V234M263 157V233" />
        <path className="barn-trim" d="M29 128L51 63L112 20L174 63L198 128M37 130H190" />
        <path className="barn-door" d="M77 164H150V244H77Z" />
        <path className="barn-trim barn-door-trim" d="M77 244V164H150V244M113 166V244M78 168L148 241M148 168L78 241" />
        <path className="barn-window" d="M94 79H131V111H94Z" />
        <path className="barn-trim barn-window-trim" d="M94 79H131V111H94ZM112 80V110" />
        <path className="barn-fence" d="M0 210H34M0 228H34M8 197V246M285 211H320M285 229H320M308 198V246" />
      </svg>
      <svg className="countryside-wheat" width="100%" height="180" focusable="false">
        <defs>
          <pattern id={wheatId} width="150" height="180" patternUnits="userSpaceOnUse">
            <g className="wheat-back">
              <path d="M18 180Q23 124 14 62M58 180Q43 126 48 91M117 180Q107 118 124 51M144 180Q129 134 139 103" />
              <path d="M14 100Q-3 88 4 74Q19 80 14 100M15 86Q28 74 23 62Q10 70 15 86M48 120Q31 111 36 98Q51 103 48 120M121 90Q104 78 113 66Q126 74 121 90M124 75Q139 63 132 49Q120 59 124 75M139 130Q121 119 128 109Q141 114 139 130" />
            </g>
            <g className="wheat-stems">
              <path d="M37 180Q47 108 35 34M89 180Q78 120 87 69M134 180Q145 138 147 110M38 156Q13 137 9 119M88 154Q105 132 115 128M44 130Q64 108 65 95" />
            </g>
            <g className="wheat-grain">
              <path d="M39 100Q16 92 20 74Q39 80 39 100M39 84Q59 72 54 55Q36 65 39 84M38 70Q18 57 24 43Q41 52 38 70M36 55Q51 39 42 26Q32 38 36 55M35 39Q25 28 33 14Q42 26 35 39" />
              <path d="M84 130Q65 120 70 107Q87 114 84 130M85 115Q105 105 100 91Q84 98 85 115M85 100Q69 88 76 77Q89 84 85 100M87 85Q102 73 96 61Q83 70 87 85M87 72Q78 60 88 50Q95 63 87 72" />
              <path d="M144 144Q128 134 132 124Q147 130 144 144M146 130Q161 119 154 109Q144 117 146 130M147 116Q137 104 147 96Q154 106 147 116" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${wheatId})`} />
      </svg>
    </div>
  );
}
