import { portfolioData } from '../data/portfolio';
import { Wrench, CheckCircle2, ShieldCheck } from 'lucide-react';

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-theme bg-theme-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
            Verified Skills & Core Competencies
          </h2>
          <p className="mt-3 text-base text-theme-muted leading-relaxed">
            Organized strictly by verified coursework, practical hackathons, and certified learning achievements—without artificial percentage bars.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div
              key={category.categoryName}
              className="p-6 sm:p-7 rounded-2xl bg-theme-card border border-theme shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="pb-3 border-b border-theme">
                  <h3 className="text-lg font-bold text-theme-main">
                    {category.categoryName}
                  </h3>
                  <p className="mt-1 text-xs text-theme-muted">
                    {category.description}
                  </p>
                </div>

                <div className="mt-5 space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-theme-alt border border-theme flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-semibold text-xs sm:text-sm text-theme-main">
                          {skill.name}
                        </div>
                        <div className="text-xs text-theme-muted mt-0.5">
                          {skill.levelDescription}
                        </div>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-theme-subtle text-theme-accent border border-theme">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>{skill.verifiedBy}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Notice */}
              <div className="mt-5 pt-3 border-t border-theme flex items-center gap-1.5 text-[11px] text-theme-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Backed by authentic credentials and coursework submissions</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
