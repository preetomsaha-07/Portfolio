import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import type { ProjectItem } from '../data/portfolio';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Users, 
  Cpu, 
  X,
  Info
} from 'lucide-react';

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Artificial Intelligence & Vision', 'System & Security', 'Data & Research'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-theme bg-theme-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Technical Projects</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
              Genuine Projects & Hackathon Innovations
            </h2>
            <p className="mt-3 text-base text-theme-muted leading-relaxed">
              Applied projects spanning computer vision surveillance, systems security, and academic data analytics.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-theme-accent text-white shadow-xs'
                    : 'bg-theme-card border border-theme text-theme-muted hover:text-theme-main hover:bg-theme-alt'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-theme-card border border-theme p-6 hover:border-theme-strong hover:shadow-md transition-all group"
            >
              <div>
                {/* Header Tag & Status */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-theme">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-theme-subtle text-theme-accent">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-medium text-theme-muted">
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-4 text-xl font-bold text-theme-main group-hover:text-theme-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-theme-muted">
                  {project.subtitle}
                </p>

                {/* Overview preview */}
                <p className="mt-3 text-xs text-theme-muted leading-relaxed line-clamp-3">
                  {project.overview}
                </p>

                {/* Hackathon / Team Badge */}
                {project.team && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-theme-muted bg-theme-alt p-2 rounded-lg border border-theme">
                    <Users className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                    <span className="truncate">{project.team}</span>
                  </div>
                )}

                {/* Event Context */}
                {project.eventOrContext && !project.team && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-theme-muted bg-theme-alt p-2 rounded-lg border border-theme">
                    <Cpu className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                    <span className="truncate">{project.eventOrContext}</span>
                  </div>
                )}
              </div>

              {/* Footer: Tech Stack & Action Button */}
              <div className="mt-6 pt-4 border-t border-theme space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded bg-theme-alt text-theme-muted border border-theme"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] px-1.5 py-0.5 rounded bg-theme-alt text-theme-muted">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-accent hover:underline cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-theme-muted">
                    {project.verification.status === 'verified' ? 'Verified' : 'Documented'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-theme-card border border-theme rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-theme">
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-theme-subtle text-theme-accent">
                  {activeProject.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-theme-main">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-medium text-theme-muted mt-0.5">
                  {activeProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-md text-theme-muted hover:text-theme-main hover:bg-theme-alt cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-5 text-sm">
              
              {/* Problem Statement */}
              <div>
                <h4 className="font-semibold text-xs text-theme-muted uppercase tracking-wider">
                  Problem Statement
                </h4>
                <p className="mt-1 text-theme-main/90 leading-relaxed text-xs sm:text-sm">
                  {activeProject.problemStatement}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-semibold text-xs text-theme-muted uppercase tracking-wider">
                  Project Overview
                </h4>
                <p className="mt-1 text-theme-main/90 leading-relaxed text-xs sm:text-sm">
                  {activeProject.overview}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-semibold text-xs text-theme-muted uppercase tracking-wider">
                  Core Capabilities & Features
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-theme-muted">
                  {activeProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Contribution */}
              <div className="p-4 rounded-xl bg-theme-alt border border-theme">
                <h4 className="font-semibold text-xs text-theme-main uppercase tracking-wider">
                  Preetom&apos;s Contribution
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-theme-muted leading-relaxed">
                  {activeProject.myContribution}
                </p>
                {activeProject.team && (
                  <p className="mt-2 text-xs font-medium text-theme-accent">
                    Collaborators: {activeProject.team}
                  </p>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-xs text-theme-muted uppercase tracking-wider">
                  Technologies & Frameworks
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-theme-alt text-theme-main border border-theme"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification & Code Status Notice */}
              <div className="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs text-theme-muted flex items-start gap-2">
                <Info className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-theme-main">Status Note: </span>
                  <span>{activeProject.verification.note}</span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-theme flex justify-end">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-theme-accent text-white hover:opacity-95 cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
