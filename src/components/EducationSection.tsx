import { portfolioData } from '../data/portfolio';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-20 border-b border-theme bg-theme-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
            Education & Institutional Training
          </h2>
          <p className="mt-3 text-base text-theme-muted leading-relaxed">
            Formal engineering and higher secondary academic journey in Kolkata, West Bengal.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme shadow-xs hover:border-theme-strong transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-theme-subtle text-theme-accent border border-theme">
                      {item.status}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-theme-main">
                    {item.institution}
                  </h3>
                  <div className="text-sm font-semibold text-theme-accent mt-0.5">
                    {item.degree} — {item.fieldOfStudy}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-1 text-xs text-theme-muted shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                    <span className="font-medium text-theme-main">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-theme-muted" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Roll number pill if present */}
              {item.rollNumber && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-theme-alt border border-theme text-xs font-mono text-theme-muted">
                  <span>College Roll No:</span>
                  <span className="font-semibold text-theme-main">{item.rollNumber}</span>
                </div>
              )}

              {/* Highlights */}
              <div className="mt-4 pt-3 border-t border-theme">
                <span className="text-xs font-semibold text-theme-main uppercase tracking-wider block mb-2">
                  Academic Highlights & Involvement
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-theme-muted">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-theme-accent mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
