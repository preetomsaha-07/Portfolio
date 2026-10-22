import { portfolioData } from '../data/portfolio';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

export function Footer() {
  const { personal, socialLinks } = portfolioData;
  const linkedin = socialLinks.find(s => s.platform === 'LinkedIn');
  const github = socialLinks.find(s => s.platform === 'GitHub');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-theme bg-theme-alt py-12 text-xs text-theme-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-theme">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-theme-accent text-white font-bold flex items-center justify-center text-xs">
                PS
              </span>
              <span className="font-bold text-sm text-theme-main">Preetom Saha</span>
              <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-theme-card border border-theme text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-3 h-3" />
                Verified Student Portfolio
              </span>
            </div>
            <p className="mt-1 text-xs text-theme-muted">
              B.Tech in Computer Science & Engineering (Data Science) · Narula Institute of Technology
            </p>
          </div>

          <div className="flex items-center gap-3">
            {linkedin?.isAvailable && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-theme bg-theme-card hover:bg-theme-alt text-theme-muted hover:text-theme-main transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
              </a>
            )}
            {github?.isAvailable && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-theme bg-theme-card hover:bg-theme-alt text-theme-muted hover:text-theme-main transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg border border-theme bg-theme-card hover:bg-theme-alt text-theme-muted hover:text-theme-main transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-theme bg-theme-card hover:bg-theme-alt text-theme-main font-medium transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Attribution & Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="max-w-xl text-[11px] text-theme-muted/80">
            {personal.verificationNotice}
          </p>
          <p className="text-[11px] text-theme-muted">
            © {new Date().getFullYear()} Preetom Saha. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
