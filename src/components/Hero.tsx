export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      {/* Background diamond pattern */}
      <svg className="hero-pattern" aria-hidden="true">
        <defs>
          <pattern id="diamonds" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
            <path
              d="M22 3 L41 22 L22 41 L3 22 Z"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamonds)" />
      </svg>

      {/* Doodle — star top right */}
      <svg
        className="hero-doodle"
        style={{ top: 48, right: 80, width: 52, height: 52 }}
        viewBox="0 0 52 52"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M26 4 L30 20 L46 20 L33 30 L38 46 L26 36 L14 46 L19 30 L6 20 L22 20 Z"
          stroke="rgba(168,179,232,0.35)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Doodle — squiggle bottom left */}
      <svg
        className="hero-doodle"
        style={{ bottom: 80, left: 48, width: 72, height: 28 }}
        viewBox="0 0 72 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 14 C12 4, 22 24, 32 14 C42 4, 52 24, 62 14 C68 8, 70 14, 70 14"
          stroke="rgba(168,179,232,0.3)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="hero-inner">
        <div className="hero-photo">
          <img src="/Rhea.JPG" alt="Rhea Mendiratta" />
          <div className="hero-photo-ring" aria-hidden="true" />
        </div>

        <div className="hero-text">
          <h1>
            Hi! I&apos;m <em>Rhea</em>
          </h1>
          <p>
            — and I design solutions to hard education problems, with a focus on enriching
            learning experiences for children. I have 5 years of experience in education in
            India and I&apos;m currently a Public Policy student at the University of Chicago.
          </p>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-icon">
          <span>scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3 L8 13 M4 9 L8 13 L12 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
