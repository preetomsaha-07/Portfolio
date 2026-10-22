import { portfolioData } from '../data/portfolio';
import { 
  ArrowRight, 
  Download, 
  Eye, 
  MapPin, 
  ShieldCheck, 
  GraduationCap, 
  Cloud, 
  Award,
  Sparkles
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { personal, socialLinks } = portfolioData;
  const linkedin = socialLinks.find(s => s.platform === 'LinkedIn');
  const github = socialLinks.find(s => s.platform === 'GitHub');

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-theme bg-theme-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Verified Student Portfolio
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-theme-alt text-theme-muted border border-theme">
                <GraduationCap className="w-3.5 h-3.5 text-theme-accent" />
                Narula Institute of Technology
              </span>
            </div>

            {/* Title & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-main leading-tight">
                {personal.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-theme-accent">
                {personal.headline}
              </p>
              <p className="mt-2 text-sm sm:text-base text-theme-muted leading-relaxed max-w-2xl">
                {personal.subheadline}
              </p>
            </div>

            {/* Location & Availability Note */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-theme-muted">
              <MapPin className="w-4 h-4 text-theme-accent shrink-0" />
              <span>{personal.location}</span>
              <span className="text-theme-muted opacity-50">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Open to Internships & Practical AI Projects</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-theme-accent text-white hover:opacity-95 shadow-sm transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePdfUrl}
                download="Preetom_Saha_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-theme bg-theme-card hover:bg-theme-alt text-theme-main transition-colors shadow-xs"
                title="Download verified PDF resume"
              >
                <Download className="w-4 h-4 text-theme-accent" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-theme bg-theme-card hover:bg-theme-alt text-theme-muted hover:text-theme-main transition-colors cursor-pointer"
                title="Preview resume online"
              >
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>

              {linkedin?.isAvailable && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-theme bg-theme-card hover:bg-theme-alt text-theme-muted hover:text-theme-main transition-colors"
                  aria-label="Preetom Saha's LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              )}

              {github?.isAvailable && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-theme bg-theme-card hover:bg-theme-alt text-theme-muted hover:text-theme-main transition-colors"
                  aria-label="Preetom Saha's GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            {/* Verification Notice Pill */}
            <p className="text-xs text-theme-muted/80 pt-1 leading-normal">
              <Sparkles className="w-3 h-3 inline mr-1 text-amber-500" />
              Content verified directly from Preetom&apos;s LinkedIn profile, college enrollment records (Roll: 127250900089), and verified certificates.
            </p>
          </div>

          {/* Right Column: Authentic Photo & Quick Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm">
              {/* Photo Card */}
              <div className="relative rounded-2xl p-2 bg-theme-card border border-theme shadow-md">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-theme-alt">
                  <img
                    src={personal.photoUrl}
                    alt="Preetom Saha - Student at Narula Institute of Technology"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                    <p className="font-semibold text-sm">Preetom Saha</p>
                    <p className="text-xs text-white/80">B.Tech 2nd Year · NIT Data Science</p>
                  </div>
                </div>

                {/* Subtitle pill */}
                <div className="mt-3 px-3 py-2 rounded-lg bg-theme-alt border border-theme flex items-center justify-between text-xs">
                  <span className="text-theme-muted">Verified Credentials</span>
                  <span className="font-semibold text-theme-accent">8+ Verified Badges</span>
                </div>
              </div>

              {/* Quick Summary Grid */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                <div className="p-3 rounded-xl bg-theme-card border border-theme">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-theme-accent">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>EduSkills AICTE</span>
                  </div>
                  <p className="mt-1 text-xs text-theme-muted">Google Cloud Generative AI Virtual Intern</p>
                </div>
                <div className="p-3 rounded-xl bg-theme-card border border-theme">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-theme-accent">
                    <Award className="w-3.5 h-3.5" />
                    <span>TCS iON Certified</span>
                  </div>
                  <p className="mt-1 text-xs text-theme-muted">Career Edge · Generative AI Essentials</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
