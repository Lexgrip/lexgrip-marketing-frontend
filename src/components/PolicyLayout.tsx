import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const APP_URL = "https://app.lexgrip.com";

interface Section {
  id: string;
  title: string;
}

interface PolicyLayoutProps {
  title: string;
  effectiveDate: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function PolicyLayout({
  title,
  effectiveDate,
  sections,
  children,
}: PolicyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <a href="/" aria-label="Lexgrip home" className="flex items-center gap-2">
            <img src="/logo.png" alt="Lexgrip logo" className="w-8 h-8 rounded-xl object-contain shadow" />
            <span className="font-semibold text-gray-900">Lexgrip</span>
          </a>
          <div className="flex items-center gap-3">
            <a href={APP_URL} className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5">
              Sign in
            </a>
            <a href={APP_URL} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors flex items-center gap-1.5">
              Get started free <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`text-sm py-1.5 px-3 rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeSection === s.id
                        ? "bg-emerald-50 text-emerald-700 font-medium"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {activeSection === s.id && <ChevronRight size={12} className="shrink-0" />}
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="min-w-0">
            <div className="mb-10 pb-8 border-b border-gray-100">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-sm text-gray-400">Effective date: {effectiveDate}</p>
            </div>

            <div className="prose-policy">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10 mt-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Lexgrip. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-gray-700 transition-colors">Privacy policy</a>
            <a href="/terms" className="hover:text-gray-700 transition-colors">Terms of service</a>
            <a href="mailto:team@lexgrip.com" className="hover:text-gray-700 transition-colors">Contact</a>
            <a href="https://discord.gg/yCubCRvjH" target="_blank" rel="noreferrer noopener" className="hover:text-gray-700 transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-28">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4 text-sm leading-7 text-gray-600">{children}</div>
    </section>
  );
}
