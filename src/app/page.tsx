'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { ProjectCard } from '@/components/ProjectCard';
import { Lightbox } from '@/components/Lightbox';
import { AccentToggle } from '@/components/AccentToggle';
import { projects, FILTERS } from '@/data/projects';
import type { Project, FilterTag } from '@/data/projects';

const FILTER_LABELS: Record<FilterTag, string> = {
  all: 'All',
  'With People': 'With People',
  'With Data': 'With Data',
  'With Ideas': 'With Ideas',
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      <AccentToggle />

      <div className="app-layout">
        <Sidebar />

        <div className="main-content">
          <Hero />

          <main className="projects-section">
            <h2 className="projects-heading">Projects</h2>

            <div className="filter-tabs" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`filter-tab${activeFilter === f ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={activeFilter === f}
                >
                  {FILTER_LABELS[f]}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filtered.length === 0 ? (
                <p className="projects-empty">No projects in this category yet.</p>
              ) : (
                filtered.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                  />
                ))
              )}
            </div>
          </main>
        </div>
      </div>

      {selectedProject && (
        <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
