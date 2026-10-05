const fontStack = "ui-sans-serif, system-ui, sans-serif";

type Chip = {
  code: string;
  x: number;
  y: number;
  rotate: number;
  color: string;
};

const chips: Chip[] = [
  { code: "EN", x: 128, y: 148, rotate: -8, color: "#0284c7" },
  { code: "DE", x: 352, y: 118, rotate: 7, color: "#d97706" },
  { code: "FR", x: 392, y: 286, rotate: -6, color: "#7c3aed" },
  { code: "KO", x: 108, y: 318, rotate: 9, color: "#e11d48" },
  { code: "ZH", x: 268, y: 398, rotate: -4, color: "#059669" },
];

const sparkles = [
  { x: 210, y: 108, color: "#818cf8" },
  { x: 430, y: 208, color: "#f472b6" },
  { x: 96, y: 232, color: "#38bdf8" },
  { x: 334, y: 452, color: "#a78bfa" },
];

export function LanguagesIllustration() {
  return (
    <svg
      viewBox="0 0 520 520"
      role="img"
      aria-label="Изучение языков по всему миру"
      className="h-auto w-full"
    >
      <defs>
        <radialGradient id="skyGlow" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </radialGradient>
        <radialGradient id="globeGrad" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#3b82f6" />
        </radialGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="10"
            floodColor="#7c9bd1"
            floodOpacity="0.22"
          />
        </filter>
      </defs>

      <circle cx="260" cy="262" r="210" fill="url(#skyGlow)" />

      <path
        d="M160 360 Q 96 190 356 90"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 10"
      />

      <g filter="url(#softShadow)">
        <circle cx="260" cy="268" r="126" fill="url(#globeGrad)" />
      </g>

      <circle
        cx="260"
        cy="268"
        r="150"
        fill="none"
        stroke="#bae6fd"
        strokeWidth="2"
      />
      <circle
        cx="260"
        cy="268"
        r="174"
        fill="none"
        stroke="#e0f2fe"
        strokeWidth="1.5"
      />

      <g stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.35">
        <ellipse cx="260" cy="268" rx="126" ry="34" />
        <ellipse cx="260" cy="268" rx="126" ry="72" />
        <ellipse cx="260" cy="268" rx="126" ry="110" />
        <ellipse cx="260" cy="268" rx="34" ry="126" />
      </g>

      <g fill="#ffffff">
        <ellipse
          cx="214"
          cy="266"
          rx="38"
          ry="58"
          opacity="0.55"
          transform="rotate(8 214 266)"
        />
        <ellipse
          cx="292"
          cy="252"
          rx="44"
          ry="66"
          opacity="0.5"
          transform="rotate(14 292 252)"
        />
        <ellipse
          cx="324"
          cy="240"
          rx="48"
          ry="32"
          opacity="0.45"
          transform="rotate(-12 324 240)"
        />
        <ellipse
          cx="330"
          cy="318"
          rx="24"
          ry="14"
          opacity="0.4"
          transform="rotate(-16 330 318)"
        />
      </g>

      <g filter="url(#softShadow)">
        <path
          d="M322 168 h64 a16 16 0 0 1 16 16 v16 a16 16 0 0 1 -16 16 h-38 l-18 16 6 -16 a16 16 0 0 1 -14 -16 v-16 a16 16 0 0 1 16 -16 Z"
          fill="#ffffff"
          stroke="#dbeafe"
          strokeWidth="1.5"
        />
        <circle cx="344" cy="192" r="4.5" fill="#818cf8" />
        <circle cx="360" cy="192" r="4.5" fill="#a78bfa" />
        <circle cx="376" cy="192" r="4.5" fill="#c084fc" />
      </g>

      <g filter="url(#softShadow)">
        <g transform="translate(340 78) scale(2.1) rotate(24)">
          <path
            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11l3.18 7.932Z"
            fill="#ffffff"
            stroke="#60a5fa"
            strokeWidth="1.2"
          />
        </g>
      </g>

      {sparkles.map((mark) => (
        <g
          key={`${mark.x}-${mark.y}`}
          stroke={mark.color}
          strokeWidth="3.5"
          strokeLinecap="round"
        >
          <path d={`M${mark.x - 7} ${mark.y} h14`} />
          <path d={`M${mark.x} ${mark.y - 7} v14`} />
        </g>
      ))}

      <circle cx="462" cy="132" r="5" fill="#93c5fd" />
      <circle cx="70" cy="120" r="4" fill="#f9a8d4" />
      <circle cx="464" cy="396" r="6" fill="#c4b5fd" />
      <circle cx="86" cy="412" r="5" fill="#a5b4fc" />

      <g filter="url(#softShadow)">
        {chips.map((chip) => (
          <g
            key={chip.code}
            transform={`translate(${chip.x} ${chip.y}) rotate(${chip.rotate})`}
          >
            <rect
              x="-30"
              y="-18"
              width="60"
              height="36"
              rx="12"
              fill="#ffffff"
              stroke="#dbeafe"
              strokeWidth="1.5"
            />
            <circle cx="-15" cy="0" r="4.5" fill={chip.color} />
            <text
              x="-5"
              y="1"
              textAnchor="start"
              dominantBaseline="central"
              fontSize="13"
              fontWeight="700"
              fill={chip.color}
              fontFamily={fontStack}
            >
              {chip.code}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
