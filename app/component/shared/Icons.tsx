export function Heart() {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* HEART */}
      <path
        d="M50 43 C45 39 31 29 27 22 C23 15 27 9 34 9 C41 9 46 13 50 19 C54 13 59 9 66 9 C73 9 77 15 73 22 C69 29 55 39 50 43 Z"
        stroke="#FF7800"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* LEFT HAND - OUTER */}
      <path
        d="M35 58 C31 55 27 52 24 48 C21 44 19 39 17 34 C15 29 12 27 11 29 C9 31 11 37 13 42 C15 49 19 55 24 59 L31 65 C34 68 35 70 35 74 L35 88"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* LEFT HAND - INNER */}
      <path
        d="M35 58 C32 56 29 54 27 51 C25 48 25 45 27 43 C29 41 32 42 35 44 L43 50 C47 53 49 57 49 62 L49 88"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* RIGHT HAND - OUTER */}
      <path
        d="M65 58 C69 55 73 52 76 48 C79 44 81 39 83 34 C85 29 88 27 89 29 C91 31 89 37 87 42 C85 49 81 55 76 59 L69 65 C66 68 65 70 65 74 L65 88"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* RIGHT HAND - INNER */}
      <path
        d="M65 58 C68 56 71 54 73 51 C75 48 75 45 73 43 C71 41 68 42 65 44 L57 50 C53 53 51 57 51 62 L51 88"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandHeart({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="30"
      viewBox="0 0 48 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* FLOATING HEART */}
      <path
        d="M24 19.5L23.1 18.6C18.8 14.3 15 11 15 7.5C15 4.5 17.4 2 20.4 2C22.2 2 23.8 2.8 24 4.2C24.2 2.8 25.8 2 27.6 2C30.6 2 33 4.5 33 7.5C33 11 29.2 14.3 24.9 18.6L24 19.5Z"
        stroke="#FF8A00"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* LEFT HAND & PALM */}
      <path
        d="M6 21.5C6 21.5 10 21.5 13 25.5C15.5 28.8 19 32 24 32C29 32 32.5 28.8 35 25.5C38 21.5 42 21.5 42 21.5"
        stroke="#FF8A00"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* BOTTOM HAND BASE / WRIST */}
      <path
        d="M10 27.5C13 32.5 17.5 36.5 24 36.5C30.5 36.5 35 32.5 38 27.5"
        stroke="#FF8A00"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* PALM CENTER DETAIL */}
      <path
        d="M20 28H28"
        stroke="#FF8A00"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}