export function AnafiLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anafi logo mark"
    >
      {/* Outer triangle */}
      <polygon
        points="20,2 38,36 2,36"
        stroke="#4A8A5A"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Middle triangle — inherits the current text colour so it reads on both themes */}
      <polygon
        points="20,10 31,32 9,32"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.45"
      />
      {/* Inner triangle */}
      <polygon
        points="20,18 26,29 14,29"
        fill="#4A8A5A"
        opacity="0.9"
      />
    </svg>
  )
}
