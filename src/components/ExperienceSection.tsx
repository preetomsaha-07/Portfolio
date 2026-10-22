import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle, ShieldCheck, FileCheck, X } from 'lucide-react';

export function ExperienceSection() {
  const { experience } = portfolioData;
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 md:py-20 border-b border-theme bg-theme-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
            Internships & Hands-On Industry Engagements
          </h2>
          <p className="mt-3 text-base text-theme-muted leading-relaxed">
            Industry virtual internships and practical assignments focusing on Cloud Generative AI and Data Science.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme shadow-xs hover:border-theme-strong transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Title & Organization */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-theme-subtle text-theme-accent border border-theme">
                      {item.type}
                    </span>
                    {item.verification.status === 'verified' ? (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Verified Offer Letter
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        <CheckCircle className="w-3 h-3 text-blue-500" />
                        LinkedIn Profile Indexed
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-theme-main">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-theme-accent">
                    {item.organization}
                  </div>
                </div>

                {/* Period & Location */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-1.5 text-xs text-theme-muted shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                    <span className="font-medium text-theme-main">{item.period}</span>
                    {item.duration && <span>({item.duration})</span>}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-theme-muted" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Reference ID Pill if available */}
              {item.referenceId && (
                <div className="mt-3 p-2 rounded-lg bg-theme-alt border border-theme text-xs font-mono text-theme-muted">
                  {item.referenceId}
                </div>
              )}

              {/* Summary & Responsibilities */}
              <p className="mt-4 text-sm text-theme-muted leading-relaxed">
                {item.summary}
              </p>

              <div className="mt-4 space-y-2">
                <span className="text-xs font-semibold text-theme-main uppercase tracking-wider block">
                  Key Responsibilities & Learning
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-theme-muted">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-theme-accent mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-5 pt-4 border-t border-theme flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-medium text-theme-muted mr-1">Skills:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-theme-alt text-theme-main border border-theme"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Document View Action */}
                {item.hasDocument && item.documentPath && (
                  <button
                    type="button"
                    onClick={() => setActiveDoc(item.documentPath!)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme hover:bg-theme-alt transition-colors cursor-pointer"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>View Offer Letter</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Offer Letter Document Preview Modal */}
      {activeDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-theme-card border border-theme rounded-2xl p-4 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-theme">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-theme-accent" />
                <h4 className="font-semibold text-sm sm:text-base text-theme-main">
                  Official AICTE - EduSkills Offer Letter (Ref: C18Y2026M091578812)
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="p-1 rounded-md text-theme-muted hover:text-theme-main hover:bg-theme-alt cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-4 rounded-xl overflow-hidden border border-theme bg-theme-alt flex justify-center">
              <img
                src={activeDoc}
                alt="AICTE EduSkills Virtual Internship Offer Letter for Preetom Saha"
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-theme-accent text-white hover:opacity-95 cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
