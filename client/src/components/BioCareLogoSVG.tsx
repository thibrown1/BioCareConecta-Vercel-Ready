export function BioCareLogoSVG() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Círculo de fundo teal */}
      <circle cx="60" cy="60" r="58" fill="#4A9BA8" />

      {/* Onda branca (ECG/Heartbeat) */}
      <g>
        {/* Linha horizontal esquerda */}
        <line x1="20" y1="60" x2="35" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round" />

        {/* Primeira subida */}
        <path
          d="M 35 60 L 40 45 L 45 60"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Vale */}
        <path
          d="M 45 60 L 50 75 L 55 60"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Segunda subida (maior) */}
        <path
          d="M 55 60 L 60 30 L 65 60"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Vale */}
        <path
          d="M 65 60 L 70 80 L 75 60"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Terceira subida */}
        <path
          d="M 75 60 L 80 45 L 85 60"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Linha horizontal direita */}
        <line x1="85" y1="60" x2="100" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
