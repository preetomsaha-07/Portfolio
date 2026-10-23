
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
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { DynamicBackground } from './DynamicBackground';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { personal, socialLinks } = portfolioData;

  const linkedin = socialLinks.find(
    (social) => social.platform === 'LinkedIn'
  );

  const github = socialLinks.find(
    (social) => social.platform === 'GitHub'
  );

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-theme bg-theme-page"
    >
      {/* Keep the 3D decoration subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <DynamicBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">

          {/* Introduction */}
          <div className="space-y-7 lg:col-span-7">

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-theme bg-theme-card px-3 py-1.5 text-xs font-medium text-theme-muted">
                <ShieldCheck className="h-4 w-4 text-theme-accent" />
                Verified Student Portfolio
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-theme bg-theme-card px-3 py-1.5 text-xs font-medium text-theme-muted">
                <GraduationCap className="h-4 w-4 text-theme-accent" />
                Narula Institute of Technology
              </span>
            </div>

            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold tracking-wide text-theme-accent">
                HELLO, I'M
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-theme-main sm:text-5xl lg:text-6xl">
                {personal.name}
                <span className="mt-2 block text-2xl font-medium leading-snug tracking-normal text-theme-accent sm:text-3xl">
                  {personal.headline}
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-theme-muted sm:text-lg">
                {personal.subheadline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-theme-muted">
              <MapPin className="h-4 w-4 shrink-0 text-theme-accent" />
              <span>{personal.location}</span>

              <span aria-hidden="true" className="text-theme-muted/50">
                /
              </span>

              <span className="font-medium text-theme-accent">
                Open to Internships & Practical AI Projects
              </span>
            </div>

            {/* Primary actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">

              <a
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#47796C] bg-[#47796C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:border-[#365F54] hover:bg-[#365F54] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#47796C]"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={personal.resumePdfUrl}
                download="Preetom_Saha_Resume.pdf"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-theme bg-theme-card px-4 py-2.5 text-sm font-medium text-theme-main transition-colors duration-200 hover:bg-theme-alt"
                title="Download PDF resume"
              >
                <Download className="h-4 w-4 text-theme-accent" />
                Download Resume
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-theme bg-theme-card px-4 py-2.5 text-sm font-medium text-theme-main transition-colors duration-200 hover:bg-theme-alt"
                title="Preview resume online"
              >
                <Eye className="h-4 w-4 text-theme-accent" />
                Preview Resume
              </button>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-5 border-t border-theme pt-5">

              {linkedin?.isAvailable && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-theme-muted transition-colors hover:text-theme-accent"
                  aria-label="Preetom Saha's LinkedIn Profile"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {github?.isAvailable && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-theme-muted transition-colors hover:text-theme-accent"
                  aria-label="Preetom Saha's GitHub Profile"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

          </div>

          {/* Profile and credentials */}
          <div className="lg:col-span-5">
            <div className="mx-auto w-full max-w-sm lg:ml-auto">

              <div className="rounded-2xl border border-theme bg-theme-card p-2 shadow-sm transition-shadow duration-300 hover:shadow-md">

                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-theme-alt">
                  <img
                    src={personal.photoUrl}
                    alt="Preetom Saha, student at Narula Institute of Technology"
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 pt-16 text-white">
                    <p className="text-lg font-semibold tracking-tight">
                      {personal.name}
                    </p>
                    <p className="mt-1 text-sm text-white/85">
                      B.Tech Student · Narula Institute of Technology
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 px-3 py-4">
                  <div>
                    <p className="text-sm font-semibold text-theme-main">
                      Credentials & Learning
                    </p>
                    <p className="mt-1 text-xs text-theme-muted">
                      Certifications and practical experience
                    </p>
                  </div>

                  <ShieldCheck className="h-5 w-5 shrink-0 text-theme-accent" />
                </div>
              </div>

              {/* Certification highlights */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="rounded-xl border border-theme bg-theme-card p-4 transition-colors duration-200 hover:border-theme-strong">
                  <div className="flex items-center gap-2 text-sm font-semibold text-theme-main">
                    <Cloud className="h-4 w-4 shrink-0 text-theme-accent" />
                    <span>EduSkills · AICTE</span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-theme-muted">
                    Google Cloud Generative AI Virtual Intern
                  </p>
                </div>

                <div className="rounded-xl border border-theme bg-theme-card p-4 transition-colors duration-200 hover:border-theme-strong">
                  <div className="flex items-center gap-2 text-sm font-semibold text-theme-main">
                    <Award className="h-4 w-4 shrink-0 text-theme-accent" />
                    <span>TCS iON</span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-theme-muted">
                    Career Edge · Generative AI Essentials
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
