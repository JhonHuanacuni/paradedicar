function Disc({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-disc`} cx="38%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#243044" />
          <stop offset="58%" stopColor="#0b1018" />
          <stop offset="100%" stopColor="#05070c" />
        </radialGradient>
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#d7e6f6" />
          <stop offset="100%" stopColor="#8eb4d4" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="99" fill={`url(#${id}-disc)`} />
      <circle
        cx="100"
        cy="100"
        r="93"
        fill="none"
        stroke="#d7e6f5"
        strokeOpacity="0.28"
        strokeWidth="1.4"
      />
    </>
  );
}

function LogoFront() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <Disc id="front" />
      <ellipse
        cx="100"
        cy="100"
        rx="72"
        ry="27"
        fill="none"
        stroke="url(#front-metal)"
        strokeWidth="1.6"
        opacity="0.8"
        transform="rotate(-32 100 100)"
      />
      <circle cx="162" cy="74" r="5" fill="#7ec8ff" />
      <circle cx="162" cy="74" r="9" fill="#7ec8ff" opacity="0.25" />
      <path
        d="M74 48 V152"
        stroke="url(#front-metal)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M78 52 H112 C150 52 150 148 112 148 H78"
        fill="none"
        stroke="url(#front-metal)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoBack() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <Disc id="back" />
      <ellipse
        cx="100"
        cy="78"
        rx="58"
        ry="16"
        fill="none"
        stroke="#9ec4e2"
        strokeWidth="1.4"
        opacity="0.7"
      />
      <circle cx="156" cy="74" r="3.5" fill="#7ec8ff" />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="#f7fbff"
        fontFamily="Lato, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="1.4"
      >
        DREAMSAPH
      </text>
    </svg>
  );
}

export default function Logo() {
  return (
    <div className="logo" role="img" aria-label="Logotipo de Dreamsaph">
      <div className="logo__coin">
        <div className="logo__face logo__face--front">
          <LogoFront />
        </div>
        <div className="logo__face logo__face--back">
          <LogoBack />
        </div>
      </div>
    </div>
  );
}
