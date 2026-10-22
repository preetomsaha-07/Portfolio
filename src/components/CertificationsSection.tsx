import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import type { CertificationItem } from '../data/portfolio';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Clock, Eye, X, FileText } from 'lucide-react';

export function CertificationsSection() {
  const { certifications } = portfolioData;
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-theme bg-theme-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-theme-subtle text-theme-accent border border-theme">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
            Certifications, Badges & Professional Courses
          </h2>
          <p className="mt-3 text-base text-theme-muted leading-relaxed">
            All credentials pulled from LinkedIn posts and official certifications: IBM SkillsBuild, Google Cloud, Tata Consultancy Services (TCS iON), Infosys Springboard, Best Computer Technology, and WBCHSE.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-2xl bg-theme-card border border-theme p-6 hover:border-theme-strong hover:shadow-md transition-all"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-theme">
                  <span className="text-xs font-semibold text-theme-accent truncate">
                    {cert.issuer}
                  </span>
                  {cert.verification.status === 'verified' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      Verified
                    </span>
                  ) : cert.verification.status === 'confirmed_by_records' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      Recorded
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      <Clock className="w-3 h-3 text-amber-500" />
                      Pending ID
                    </span>
                  )}
                </div>

                {/* Certificate Thumbnail or Document Icon */}
                {cert.imagePath ? (
                  <div
                    onClick={() => setActiveCertificate(cert)}
                    className="mt-4 aspect-16/10 rounded-lg overflow-hidden border border-theme bg-theme-alt relative group cursor-pointer"
                  >
                    <img
                      src={cert.imagePath}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-semibold gap-1.5 transition-opacity">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Credential</span>
                    </div>
                  </div>
                ) : cert.pdfPath ? (
                  <div
                    onClick={() => setActiveCertificate(cert)}
                    className="mt-4 aspect-16/10 rounded-lg overflow-hidden border border-theme bg-theme-alt flex flex-col items-center justify-center p-4 relative group cursor-pointer"
                  >
                    <FileText className="w-10 h-10 text-theme-accent mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-theme-main">View Official PDF</span>
                    <span className="text-[11px] text-theme-muted">Click to preview document</span>
                  </div>
                ) : null}

                {/* Title */}
                <h3 className="mt-4 text-base font-bold text-theme-main leading-snug">
                  {cert.title}
                </h3>

                {/* Issue Date & Credential ID */}
                <div className="mt-2 space-y-1 text-xs text-theme-muted">
                  <div>Issued: <span className="font-medium text-theme-main">{cert.issueDate}</span></div>
                  {cert.credentialId && (
                    <div className="font-mono text-[11px] text-theme-accent">
                      {cert.credentialId.startsWith('ID:') || cert.credentialId.startsWith('No.') ? cert.credentialId : `ID: ${cert.credentialId}`}
                    </div>
                  )}
                </div>

                {/* Topics Covered */}
                <div className="mt-4 pt-3 border-t border-theme">
                  <span className="text-[11px] font-semibold text-theme-muted uppercase tracking-wider block mb-1.5">
                    Topics & Highlights
                  </span>
                  <ul className="space-y-1 text-xs text-theme-muted">
                    {cert.topicsCovered.slice(0, 3).map((topic, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-theme-accent mt-0.5">•</span>
                        <span className="line-clamp-1">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-theme flex items-center justify-between gap-2">
                {cert.imagePath || cert.pdfPath ? (
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-accent hover:underline cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{cert.pdfPath ? 'Preview Document' : 'Inspect Credential'}</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-theme-muted italic">
                    Verified Credential ID
                  </span>
                )}

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-theme-muted hover:text-theme-main"
                  >
                    <span>Verify Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal (Image or PDF) */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-theme-card border border-theme rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-theme">
              <div>
                <span className="text-xs font-semibold text-theme-accent">
                  {activeCertificate.issuer}
                </span>
                <h4 className="font-bold text-lg text-theme-main">
                  {activeCertificate.title}
                </h4>
                {activeCertificate.credentialId && (
                  <p className="font-mono text-xs text-theme-muted mt-0.5">
                    {activeCertificate.credentialId}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="p-1 rounded-md text-theme-muted hover:text-theme-main hover:bg-theme-alt cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-4 rounded-xl overflow-hidden border border-theme bg-theme-alt flex justify-center p-2">
              {activeCertificate.imagePath ? (
                <img
                  src={activeCertificate.imagePath}
                  alt={activeCertificate.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg"
                />
              ) : activeCertificate.pdfPath ? (
                <iframe
                  src={`${activeCertificate.pdfPath}#toolbar=1`}
                  title={activeCertificate.title}
                  className="w-full h-[60vh] rounded-lg border-none"
                />
              ) : null}
            </div>

            {/* Modal Footer */}
            <div className="mt-4 pt-3 border-t border-theme flex items-center justify-between">
              {activeCertificate.verificationUrl ? (
                <a
                  href={activeCertificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-accent hover:underline"
                >
                  <span>Open Verification Authority</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : activeCertificate.pdfPath ? (
                <a
                  href={activeCertificate.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-accent hover:underline"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-theme-muted">
                  Official credential record
                </span>
              )}

              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-theme-accent text-white hover:opacity-95 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
