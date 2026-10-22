import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Laptop, FileText, CheckCircle2 } from 'lucide-react';
import type { ThemeMode } from '../hooks/useTheme';

interface NavbarProps {
  themeMode: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setThemeMode: (mode: ThemeMode) => void;
  onOpenResume: () => void;
}

export function Navbar({
  themeMode,
  resolvedTheme,
  setThemeMode,
  onOpenResume
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  const cycleTheme = () => {
    if (themeMode === 'system') setThemeMode('light');
    else if (themeMode === 'light') setThemeMode('dark');
    else setThemeMode('system');
  };

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-theme-page/90 backdrop-blur-md border-theme shadow-sm'
          : 'bg-theme-page border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-theme-main font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-theme-accent text-white flex items-center justify-center font-bold text-sm shadow-sm">
              PS
            </span>
            <span className="font-bold">Preetom Saha</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-theme text-theme-muted bg-theme-alt">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              NIT 2nd Yr
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-theme-accent bg-theme-subtle'
                      : 'text-theme-muted hover:text-theme-main hover:bg-theme-alt'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions: Resume & Theme */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle Pill */}
            <button
              onClick={cycleTheme}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border border-theme bg-theme-card hover:bg-theme-alt text-theme-muted transition-colors cursor-pointer"
              title={`Current: ${themeMode} (${resolvedTheme}). Click to cycle: System → Light → Dark`}
              aria-label="Toggle theme appearance"
            >
              {themeMode === 'system' ? (
                <>
                  <Laptop className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Auto</span>
                </>
              ) : resolvedTheme === 'dark' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Light</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-theme bg-theme-card hover:bg-theme-alt text-theme-main transition-colors shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-theme-accent" />
              Resume
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-theme-accent hover:opacity-95 text-white transition-opacity shadow-xs"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={cycleTheme}
              type="button"
              className="p-1.5 rounded-md border border-theme text-theme-muted bg-theme-card cursor-pointer"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Moon className="w-4 h-4 text-amber-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-theme text-theme-muted hover:text-theme-main bg-theme-card cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-theme bg-theme-page px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium rounded-md text-theme-muted hover:text-theme-main hover:bg-theme-alt"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-theme flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-theme bg-theme-card text-theme-main"
            >
              <FileText className="w-4 h-4 text-theme-accent" />
              View & Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-theme-accent text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
