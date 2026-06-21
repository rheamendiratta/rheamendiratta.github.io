'use client';

import { useEffect } from 'react';
import type { Project, Tag } from '@/data/projects';

const TAG_COLOR: Record<Tag, string> = {
  'With People': 'saffron',
  'With Data': 'gulabi',
  'With Ideas': 'haldi',
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

  const hasImages = !!(project.featuredImage || project.galleryImages?.length);

  return (
    <div
      className="lightbox-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className={[
        'lightbox-panel',
        project.pdfLink ? 'lightbox-panel--pdf' : '',
        hasImages ? 'lightbox-panel--gallery' : '',
      ].filter(Boolean).join(' ')}>

        <div className="lightbox-color-bar">
          <button className="lightbox-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="lightbox-body">
          {/* Two-column layout when there's a featured image */}
          {project.featuredImage ? (
            <div className="lightbox-split">
              <div className="lightbox-split-text">
                <h2 className="lightbox-title">{project.title}</h2>
                <div className="lightbox-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`tag ${TAG_COLOR[tag]}`}>{tag}</span>
                  ))}
                </div>
                <div className="lightbox-description">
                  {project.body.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              </div>
              <div className="lightbox-split-image">
                <img
                  src={project.featuredImage.src}
                  alt={project.featuredImage.alt}
                />
              </div>
            </div>
          ) : (
            <>
              <h2 className="lightbox-title">{project.title}</h2>
              <div className="lightbox-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className={`tag ${TAG_COLOR[tag]}`}>{tag}</span>
                ))}
              </div>
              <div className="lightbox-description">
                {project.body.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </>
          )}

          {project.bullets && (
            <ul className="lightbox-bullets">
              {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          {project.note && (
            <p className="lightbox-note">{project.note}</p>
          )}

          {/* Gallery strip */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="lightbox-gallery">
              {project.galleryImages.map((img) => (
                <figure key={img.src} className="lightbox-gallery-item">
                  <img src={img.src} alt={img.alt} />
                  {img.caption && <figcaption>{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}

          {/* Embedded PDF */}
          {project.pdfLink && (
            <div className="lightbox-pdf">
              <iframe src={project.pdfLink} title={`${project.title} PDF`} />
              <div className="lightbox-pdf-bar">
                <a href={project.pdfLink} download className="btn-secondary">
                  Download PDF ↓
                </a>
              </div>
            </div>
          )}

          {(project.externalLink || project.spotifyLink || project.githubLink) && (
            <div className="lightbox-actions">
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {project.externalLinkLabel ?? 'View Project →'}
                </a>
              )}
              {project.spotifyLink && (
                <a
                  href={project.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spotify"
                >
                  Listen on Spotify ↗
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
