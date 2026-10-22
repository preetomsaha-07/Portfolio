import { portfolioData } from '../data/portfolio';
import { User, CheckCircle, Database, Sparkles, Building2 } from 'lucide-react';

export function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-20 border-b border-theme bg-theme-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
            <User className="w-3.5 h-3.5" />
            <span>About Preetom</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
            Building Practical Foundations in Applied AI & Data Engineering
          </h2>
          <p className="mt-3 text-base text-theme-muted leading-relaxed">
            A dedicated technology student pursuing Computer Science and Engineering with a specialization in Data Science at Narula Institute of Technology.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-4 text-theme-main/90 leading-relaxed text-sm sm:text-base">
            {personal.bio.map((paragraph, index) => (
              <p key={index} className="text-theme-muted">
                {paragraph}
              </p>
            ))}

            {/* Key Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-theme-card border border-theme">
                <div className="w-8 h-8 rounded-lg bg-theme-subtle text-theme-accent flex items-center justify-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-theme-main">Data Science & Big Data</h3>
                <p className="mt-1 text-xs text-theme-muted leading-normal">
                  Certified in PySpark through Infosys Springboard; analyzing tabular datasets, distributed operations, and data pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-theme-card border border-theme">
                <div className="w-8 h-8 rounded-lg bg-theme-subtle text-theme-accent flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-theme-main">Applied Generative AI</h3>
                <p className="mt-1 text-xs text-theme-muted leading-normal">
                  Hands-on Prompt Design with Vertex AI (Google Cloud), IBM Granite Models, and TCS iON Generative AI Essentials.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Status Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-theme-card border border-theme shadow-xs space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-theme">
                <Building2 className="w-5 h-5 text-theme-accent" />
                <span className="font-semibold text-sm text-theme-main">Academic Identity & Background</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-theme-muted block text-xs">Current Institution</span>
                  <span className="font-semibold text-theme-main">Narula Institute of Technology</span>
                  <span className="text-theme-muted block text-xs">(JIS Group, Agarpara, Kolkata)</span>
                </div>

                <div className="pt-2 border-t border-theme">
                  <span className="text-theme-muted block text-xs">Degree & Specialization</span>
                  <span className="font-medium text-theme-main">B.Tech in Computer Science & Engineering (Data Science)</span>
                </div>

                <div className="pt-2 border-t border-theme grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-theme-muted block text-xs">Enrollment Period</span>
                    <span className="font-medium text-theme-main">2025 – 2029 (2nd Year)</span>
                  </div>
                  <div>
                    <span className="text-theme-muted block text-xs">College Roll No</span>
                    <span className="font-mono text-xs font-semibold text-theme-accent">127250900089</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-theme">
                  <span className="text-theme-muted block text-xs">Higher Secondary School</span>
                  <span className="font-medium text-theme-main">Ariadaha Kalachand High School (2025)</span>
                </div>

                <div className="pt-2 border-t border-theme">
                  <span className="text-theme-muted block text-xs">Verification Status</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified from official student records
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
