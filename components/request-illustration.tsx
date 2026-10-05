import type { ReactElement } from "react";

const fontStack = "ui-sans-serif, system-ui, sans-serif";

type FlagCard = {
  id: "england" | "germany" | "france" | "china" | "korea";
  x: number;
  y: number;
  rotate: number;
  scale: number;
};

const cards: FlagCard[] = [
  { id: "china", x: 150, y: 140, rotate: -6, scale: 0.95 },
  { id: "korea", x: 336, y: 150, rotate: 6, scale: 0.95 },
  { id: "england", x: 100, y: 214, rotate: -10, scale: 1 },
  { id: "france", x: 362, y: 230, rotate: 10, scale: 1 },
  { id: "germany", x: 228, y: 300, rotate: 0, scale: 1.25 },
];

function starPath(cx: number, cy: number, outer: number, inner: number) {
  const points: string[] = [];
  for (let i = 0; i < 10; i += 1) {
    const r = i % 2 === 0 ? outer : inner;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    points.push(
      `${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`
    );
  }
  return points.join(" ");
}

function Trigram({
  cx,
  cy,
  solid,
}: {
  cx: number;
  cy: number;
  solid: [boolean, boolean, boolean];
}) {
  const yOffsets = [-8, 0, 8];
  return (
    <g>
      {yOffsets.map((oy, i) =>
        solid[i] ? (
          <rect
            key={i}
            x={cx - 8}
            y={cy + oy - 1.5}
            width={16}
            height={3}
            rx={1.5}
            fill="#000000"
          />
        ) : (
          <g key={i}>
            <rect
              x={cx - 8}
              y={cy + oy - 1.5}
              width={6.5}
              height={3}
              rx={1.5}
              fill="#000000"
            />
            <rect
              x={cx + 1.5}
              y={cy + oy - 1.5}
              width={6.5}
              height={3}
              rx={1.5}
              fill="#000000"
            />
          </g>
        )
      )}
    </g>
  );
}

function EnglandFlag() {
  return (
    <g>
      <rect x={-50} y={-30} width={100} height={60} fill="#ffffff" />
      <rect x={-10} y={-30} width={20} height={60} fill="#c8102e" />
      <rect x={-50} y={-6} width={100} height={12} fill="#c8102e" />
    </g>
  );
}

function GermanyFlag() {
  return (
    <g>
      <rect x={-50} y={-30} width={100} height={20} fill="#141414" />
      <rect x={-50} y={-10} width={100} height={20} fill="#dd0000" />
      <rect x={-50} y={10} width={100} height={20} fill="#ffce00" />
    </g>
  );
}

function FranceFlag() {
  return (
    <g>
      <rect x={-50} y={-30} width={100} height={60} fill="#0055a4" />
      <rect x={-16.67} y={-30} width={33.33} height={60} fill="#ffffff" />
      <rect x={16.67} y={-30} width={33.33} height={60} fill="#ef4135" />
    </g>
  );
}

function ChinaFlag() {
  return (
    <g>
      <rect x={-50} y={-30} width={100} height={60} fill="#de2910" />
      <path d={`M ${starPath(-30, -16, 7.5, 3.2)} Z`} fill="#ffde00" />
      <path d={`M ${starPath(-19, -19.5, 2.8, 1.3)} Z`} fill="#ffde00" />
      <path d={`M ${starPath(-16.5, -14, 2.8, 1.3)} Z`} fill="#ffde00" />
      <path d={`M ${starPath(-18, -8, 2.8, 1.3)} Z`} fill="#ffde00" />
      <path d={`M ${starPath(-22.5, -3.5, 2.8, 1.3)} Z`} fill="#ffde00" />
    </g>
  );
}

function KoreaFlag() {
  return (
    <g>
      <rect x={-50} y={-30} width={100} height={60} fill="#ffffff" />
      <path d="M -10 0 A 10 10 0 0 1 10 0 Z" fill="#cd2e3a" />
      <path d="M -10 0 A 10 10 0 0 0 10 0 Z" fill="#0047a0" />
      <Trigram cx={-30} cy={-18} solid={[true, true, true]} />
      <Trigram cx={30} cy={-18} solid={[true, false, true]} />
      <Trigram cx={-30} cy={18} solid={[false, true, false]} />
      <Trigram cx={30} cy={18} solid={[false, false, false]} />
    </g>
  );
}

const flagById: Record<FlagCard["id"], () => ReactElement> = {
  england: EnglandFlag,
  germany: GermanyFlag,
  france: FranceFlag,
  china: ChinaFlag,
  korea: KoreaFlag,
};

export function RequestIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      role="img"
      aria-label="Флаги стран изучаемых языков"
      className="h-auto w-full"
    >
      <defs>
        <radialGradient id="reqGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </radialGradient>
        <filter id="reqShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="12"
            floodColor="#64748b"
            floodOpacity="0.18"
          />
        </filter>
        <filter id="reqBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        {cards.map((card) => (
          <clipPath key={card.id} id={`rif-clip-${card.id}`}>
            <rect x={-50} y={-30} width={100} height={60} rx={7} />
          </clipPath>
        ))}
      </defs>

      <circle cx="260" cy="230" r="215" fill="url(#reqGlow)" />
      <circle cx="56" cy="336" r="72" fill="#e0e7ff" />
      <circle cx="452" cy="112" r="58" fill="#e0e7ff" />

      <ellipse
        cx="228"
        cy="364"
        rx="118"
        ry="16"
        fill="#a5b4fc"
        opacity="0.35"
        filter="url(#reqBlur)"
      />

      {cards.map((card) => {
        const Flag = flagById[card.id];
        return (
          <g
            key={card.id}
            filter="url(#reqShadow)"
            transform={`translate(${card.x} ${card.y}) rotate(${card.rotate}) scale(${card.scale})`}
          >
            <rect
              x={-60}
              y={-40}
              width={120}
              height={80}
              rx={16}
              fill="#ffffff"
              stroke="#e0e7ff"
              strokeWidth={1.5}
            />
            <g clipPath={`url(#rif-clip-${card.id})`}>
              <Flag />
            </g>
          </g>
        );
      })}

      <g filter="url(#reqShadow)">
        <circle
          cx="378"
          cy="330"
          r="38"
          fill="#ffffff"
          stroke="#c7d2fe"
          strokeWidth={1.5}
        />
        <text
          x="378"
          y="318"
          textAnchor="middle"
          fontSize="24"
          fontWeight="800"
          fill="#4f46e5"
          fontFamily={fontStack}
        >
          5
        </text>
        <text
          x="378"
          y="348"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#6366f1"
          fontFamily={fontStack}
        >
          языков
        </text>
      </g>

      <circle cx="470" cy="290" r="5" fill="#a5b4fc" />
      <circle cx="44" cy="120" r="4" fill="#c4b5fd" />
      <circle cx="264" cy="86" r="6" fill="#93c5fd" />
    </svg>
  );
}
