import { useState } from 'react';
import type { FormEvent } from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  CheckCircle2
} from 'lucide-react';
import { LinkedInIcon } from './Icons';

export function ContactSection() {
  const { personal, socialLinks } = portfolioData;
  const linkedin = socialLinks.find(s => s.platform === 'LinkedIn');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    setError(null);

    // Open mailto with the formatted message
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Preetom,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-theme-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
            Get in Touch with Preetom
          </h2>
          <p className="mt-3 text-base text-theme-muted leading-relaxed">
            Reach out regarding internship opportunities, student hackathon collaborations, or technical projects.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-theme-card border border-theme shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-theme-muted uppercase tracking-wider">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs text-theme-accent hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-bold text-theme-main hover:text-theme-accent transition-colors block break-all"
              >
                {personal.email}
              </a>
              <p className="text-xs text-theme-muted">
                Preetom checks his email regularly for academic and professional inquiries.
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-theme-card border border-theme shadow-xs space-y-2">
              <span className="text-xs font-semibold text-theme-muted uppercase tracking-wider block">
                Phone Number
              </span>
              <a
                href={`tel:${personal.phone}`}
                className="text-base font-bold text-theme-main hover:text-theme-accent transition-colors block"
              >
                {personal.phone}
              </a>
              <p className="text-xs text-theme-muted">
                Direct phone & WhatsApp contact for verified recruiters and academic peers.
              </p>
            </div>

            {/* Location & Institution */}
            <div className="p-6 rounded-2xl bg-theme-card border border-theme shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-theme-muted uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-theme-main mt-0.5">
                    {personal.location}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-theme flex items-center justify-between">
                <span className="text-xs text-theme-muted">LinkedIn Profile</span>
                {linkedin?.isAvailable && (
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-theme-accent hover:underline"
                  >
                    <span>Visit Profile</span>
                    <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-theme shadow-xs">
              <h3 className="text-lg font-bold text-theme-main">
                Send a Direct Message
              </h3>
              <p className="mt-1 text-xs text-theme-muted">
                Submitting this form prepares your message and launches your email client to send directly to Preetom without third-party data tracking.
              </p>

              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>Your email client was opened with the drafted message. If it didn&apos;t open automatically, write directly to <strong>{personal.email}</strong>.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-theme-main mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-theme bg-theme-alt text-theme-main placeholder:text-theme-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-theme-main mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-theme bg-theme-alt text-theme-main placeholder:text-theme-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-theme-main mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-theme bg-theme-alt text-theme-main placeholder:text-theme-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-theme-main mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-theme bg-theme-alt text-theme-main placeholder:text-theme-muted/60 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-theme-muted">
                    Direct dispatch via <span className="font-mono">{personal.email}</span>
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold bg-theme-accent text-white hover:opacity-95 shadow-xs transition-opacity cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
