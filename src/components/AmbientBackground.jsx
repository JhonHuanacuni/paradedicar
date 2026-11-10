const BULB_COLORS = ["red", "gold", "green", "blue"];
const BULBS = Array.from({ length: 18 }, (_, index) => BULB_COLORS[index % BULB_COLORS.length]);

const FLAKES = [
  { left: "3%", size: 8, duration: 16, delay: 0, opacity: 0.45 },
  { left: "9%", size: 24, duration: 9, delay: 2, opacity: 0.9 },
  { left: "16%", size: 13, duration: 12, delay: 4, opacity: 0.7 },
  { left: "22%", size: 7, duration: 18, delay: 1, opacity: 0.4 },
  { left: "29%", size: 19, duration: 10.5, delay: 5.5, opacity: 0.85 },
  { left: "36%", size: 11, duration: 14, delay: 3, opacity: 0.6 },
  { left: "43%", size: 28, duration: 8.5, delay: 6.5, opacity: 0.92 },
  { left: "50%", size: 9, duration: 15.5, delay: 1.5, opacity: 0.5 },
  { left: "57%", size: 15, duration: 11.5, delay: 7.5, opacity: 0.75 },
  { left: "64%", size: 22, duration: 9.5, delay: 0.5, opacity: 0.88 },
  { left: "71%", size: 8, duration: 17, delay: 4.5, opacity: 0.45 },
  { left: "77%", size: 16, duration: 12, delay: 2.5, opacity: 0.75 },
  { left: "83%", size: 26, duration: 8.8, delay: 5, opacity: 0.9 },
  { left: "89%", size: 10, duration: 14.5, delay: 3.5, opacity: 0.55 },
  { left: "94%", size: 18, duration: 10.8, delay: 6, opacity: 0.8 },
  { left: "98%", size: 7, duration: 16.5, delay: 1.2, opacity: 0.4 },
];

function Snowflake() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M12 1.5 V22.5 M3.2 6.6 L20.8 17.4 M20.8 6.6 L3.2 17.4" />
        <path d="M12 5.2 L9.6 2.8 M12 5.2 L14.4 2.8 M12 18.8 L9.6 21.2 M12 18.8 L14.4 21.2" />
        <path d="M6.2 8.4 L3.4 7.2 M6.2 8.4 L5.4 5.6 M17.8 15.6 L20.6 16.8 M17.8 15.6 L18.6 18.4" />
        <path d="M17.8 8.4 L20.6 7.2 M17.8 8.4 L18.6 5.6 M6.2 15.6 L3.4 16.8 M6.2 15.6 L5.4 18.4" />
      </g>
    </svg>
  );
}

export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="night-sky" />
      <div className="snowfall">
        {FLAKES.map((flake) => (
          <span
            key={`${flake.left}-${flake.delay}`}
            className="flake"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              opacity: flake.opacity,
            }}
          >
            <Snowflake />
          </span>
        ))}
      </div>
      <div className="snow-bank">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path
            fill="#c9dced"
            d="M0 0 H1440 V50 C1310 82 1180 28 1040 54 C900 80 800 88 680 48 C560 12 430 72 300 64 C180 56 90 20 0 42 Z"
          />
          <path
            fill="#ffffff"
            d="M0 0 H1440 V36 C1310 66 1180 16 1040 40 C900 64 800 74 680 36 C560 4 430 56 300 50 C180 44 90 10 0 30 Z"
          />
        </svg>
      </div>
      <ul className="lights">
        {BULBS.map((color, index) => (
          <li key={`${color}-${index}`} className={`bulb bulb--${color}`} />
        ))}
      </ul>
    </div>
  );
}
