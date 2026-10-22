import { portfolioData } from '../data/portfolio';
import { X, Download, ExternalLink, FileText, ShieldCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-theme-card border border-theme rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-theme bg-theme-alt">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-theme-subtle text-theme-accent flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-theme-main">
                Preetom Saha — Official Resume
              </h3>
              <p className="text-xs text-theme-muted">
                B.Tech 2nd Year Student · Narula Institute of Technology (2025 – 2029)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumePdfUrl}
              download="Preetom_Saha_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-theme-accent text-white hover:opacity-95 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-theme-muted hover:text-theme-main hover:bg-theme-card transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content: PDF Iframe + Quick Metadata */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* Summary Banner */}
          <div className="p-3 rounded-xl bg-theme-alt border border-theme flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified PDF Resume (Authentic Document)</span>
            </div>
            <a
              href={personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-theme-accent hover:underline font-medium"
            >
              <span>Open in new window</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* PDF Viewer Frame */}
          <div className="w-full h-[62vh] rounded-xl overflow-hidden border border-theme bg-zinc-100 dark:bg-zinc-900">
            <iframe
              src={`${personal.resumePdfUrl}#toolbar=1&navpanes=0`}
              title="Preetom Saha Resume PDF"
              className="w-full h-full border-none"
            />
          </div>

          {/* Quick Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-2.5 rounded-lg bg-theme-alt border border-theme">
              <span className="text-theme-muted block font-medium">Institution</span>
              <span className="font-semibold text-theme-main">Narula Institute of Technology</span>
            </div>
            <div className="p-2.5 rounded-lg bg-theme-alt border border-theme">
              <span className="text-theme-muted block font-medium">Contact</span>
              <span className="font-semibold text-theme-main">{personal.email}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-theme-alt border border-theme">
              <span className="text-theme-muted block font-medium">Phone</span>
              <span className="font-semibold text-theme-main">{personal.phone}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
