import { portfolioData } from '../data/portfolio';
import { Flag, Calendar } from 'lucide-react';

export function EventsSection() {
  const { events } = portfolioData;

  return (
    <section id="events" className="py-16 md:py-20 border-b border-theme bg-theme-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
            <Flag className="w-3.5 h-3.5" />
            <span>Hackathons & Co-Curricular</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
            Hackathons, Innovation Events & Representation
          </h2>
          <p className="mt-3 text-base text-theme-muted leading-relaxed">
            Collaborative developer sprints, student tech ambassador initiatives, and institutional cultural representation.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="p-6 rounded-2xl bg-theme-card border border-theme shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-theme">
                  <span className="text-xs font-semibold text-theme-accent">
                    {evt.organizationOrHost}
                  </span>
                  <span className="text-xs text-theme-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {evt.year}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-theme-main">
                  {evt.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-theme-accent">
                  Role: {evt.roleOrTeam}
                </p>

                <p className="mt-3 text-xs text-theme-muted leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-theme">
                <span className="text-[11px] font-semibold text-theme-muted uppercase tracking-wider block mb-1">
                  Outcome & Status
                </span>
                <p className="text-xs font-medium text-theme-main">
                  {evt.outcomeOrStatus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
