import type { Project, Tag } from '@/data/projects';

const TAG_COLOR: Record<Tag, string> = {
  'With People': 'saffron',
  'With Data': 'gulabi',
  'With Ideas': 'haldi',
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
      <div className="card-color-bar" />

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
