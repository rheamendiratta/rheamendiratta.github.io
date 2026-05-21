import type { Project, Tag } from '@/data/projects';

const TAG_COLOR: Record<Tag, string> = {
  'Education': 'saffron',
  'Research & Data': 'haldi',
  'Social Impact': 'gulabi',
};

const CARD_SVG: Record<string, React.ReactNode> = {
  saffron: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="28" stroke="var(--saffron)" strokeWidth="2" />
      <path d="M40 20v40M20 40h40" stroke="var(--saffron)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="40" cy="40" r="8" stroke="var(--saffron)" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  haldi: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="12" y="12" width="56" height="56" rx="10" stroke="var(--haldi)" strokeWidth="2" />
      <path d="M24 40h32M40 24v32" stroke="var(--haldi)" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 28l8 8M48 44l8 8" stroke="var(--haldi)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  gulabi: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M40 60 C40 60 16 46 16 30 a14 14 0 0 1 24-10 14 14 0 0 1 24 10 C64 46 40 60 40 60Z" stroke="var(--gulabi)" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="40" cy="32" r="5" stroke="var(--gulabi)" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  ),
};

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: Props) {
  return (
    <article
      className="project-card"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      aria-label={`Open ${project.title}`}
    >
      <div className="card-image">
        <div className={`card-image-inner ${project.color}`}>
          {CARD_SVG[project.color]}
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
        <div className="card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className={`tag ${TAG_COLOR[tag]}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
