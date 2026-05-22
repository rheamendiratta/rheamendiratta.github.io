export function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-name">Rhea Mendiratta</p>

      <div className="sidebar-links">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rheamendiratta/"
          className="sidebar-icon-link"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:rhea.mendiratta@gmail.com"
          className="sidebar-icon-link"
          aria-label="Email"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rheamendiratta"
          className="sidebar-icon-link"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        <a href="https://drive.google.com/file/d/1rlZo5NALptkHpZZYQhPtsq7eJmUl3WWl/view?usp=sharing" className="sidebar-resume-btn" target="_blank" rel="noopener noreferrer">
          Download CV ↗
        </a>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-bio">
        <p>
          I thrive in high-challenge environments. I bring curiosity, compassion, and analytical 
          thinking to create <b>sustainable impact in the education sector.</b>
        </p>
        <p>
          I began my journey as a Math and Science teacher supporting middle school students 
          in an underserved community in Ahmedabad, Gujarat, with <a href="https://www.teachforindia.org/" target="_blank" rel="noopener noreferrer">Teach For India.</a>{' '}
          I then conducted research, designed programs, and evaluated impact at <a href="https://www.mantra4change.org/" target="_blank" rel="noopener noreferrer">Mantra Social Services.</a> I worked with government stakeholders and non-profit teams to build 
          scalable education solutions and contributed to a social enterprise.
        </p>
        <p>
          Outside of education and systems, I enjoy cooking, exploring records of space 
          and deep-sea expeditions, and lately, building apps.
        </p>
        <p>
          Email me to connect and collaborate!
        </p>
      </div>
    </aside>
  );
}
