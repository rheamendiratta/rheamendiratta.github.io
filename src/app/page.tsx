'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { ProjectCard } from '@/components/ProjectCard';
import { Lightbox } from '@/components/Lightbox';
import { ThemeToggle } from '@/components/ThemeToggle';
import { projects, FILTERS } from '@/data/projects';
import type { Project, FilterTag } from '@/data/projects';

const FILTER_LABELS: Record<FilterTag, string> = {
  all: 'All',
  'Education': 'Education',
  'Research & Data': 'Research & Data',
  'Social Impact': 'Social Impact',
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
      <ThemeToggle />
      <Hero />

      <div className="content-layout">
        <Sidebar />

        <main className="projects-section">
          <h2 className="projects-heading">Projects</h2>

          {/* Filter tabs */}
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

          {/* Project grid */}
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

      {selectedProject && (
        <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
