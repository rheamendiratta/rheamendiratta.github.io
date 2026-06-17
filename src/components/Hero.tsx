export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-inner">
        <div className="hero-photo">
          <img src="/Rhea2.png" alt="Rhea Mendiratta" />
          <div className="hero-photo-ring" aria-hidden="true" />
        </div>

        <div className="hero-text">
          <h1>
            Hi! I&apos;m <em>Rhea</em>
          </h1>
          <p>
            — and I design solutions to hard educational challenges, with a focus on enabling joyful learning experiences for children. I have 5 years of experience in the education sector in India, including teaching, research, program design and implementation at scale. I have
            just graduated with a <a href="https://harris.uchicago.edu/news-events/news/student-profile-rhea-mendiratta-mpp-class-2026" target="_blank" rel="noopener noreferrer">Master of Public Policy degree from the University of Chicago.</a>
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
