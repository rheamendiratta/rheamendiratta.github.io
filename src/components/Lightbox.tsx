'use client';

import { useEffect } from 'react';
import type { Project, Tag } from '@/data/projects';

const TAG_COLOR: Record<Tag, string> = {
  'Education': 'saffron',
  'Research & Data': 'haldi',
  'Social Impact': 'gulabi',
};

const LIGHTBOX_SVG: Record<string, React.ReactNode> = {
  saffron: (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="44" stroke="var(--saffron)" strokeWidth="2" />
      <path d="M60 28v64M28 60h64" stroke="var(--saffron)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="60" cy="60" r="14" stroke="var(--saffron)" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  haldi: (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <rect x="16" y="16" width="88" height="88" rx="14" stroke="var(--haldi)" strokeWidth="2" />
      <path d="M36 60h48M60 36v48" stroke="var(--haldi)" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 40l12 12M72 68l12 12" stroke="var(--haldi)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  gulabi: (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <path d="M60 96 C60 96 20 72 20 44 a24 24 0 0 1 40-18 24 24 0 0 1 40 18 C100 72 60 96 60 96Z" stroke="var(--gulabi)" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="60" cy="50" r="10" stroke="var(--gulabi)" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  ),
};

interface Props {
  project: Project;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="lightbox-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="lightbox-panel">
        {/* Colored header */}
        <div className={`lightbox-header-img ${project.color}`}>
          {LIGHTBOX_SVG[project.color]}
          <button className="lightbox-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="lightbox-body">
          <h2 className="lightbox-title">{project.title}</h2>

          <div className="lightbox-tags">
            {project.tags.map((tag) => (
              <span key={tag} className={`tag ${TAG_COLOR[tag]}`}>
                {tag}
              </span>
            ))}
          </div>

          <div className="lightbox-description">
            {project.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {project.bullets && (
            <ul className="lightbox-bullets">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {project.note && (
            <p className="lightbox-note">{project.note}</p>
          )}

          {(project.externalLink || project.githubLink) && (
            <div className="lightbox-actions">
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Project →
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
