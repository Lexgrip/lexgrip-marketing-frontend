import { useState } from "react";
import "@/index.css";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Globe,
  BookOpen,
  Brain,
  MessageCircle,
  MapPin,
  Clock,
  Volume2,
  Bot,
  Sparkles,
  ShoppingBag,
  Plane,
  UtensilsCrossed,
  Briefcase,
  Heart,
  Users,
  Home,
  Bus,
  AlertTriangle,
  Cloud,
  type LucideIcon,
} from "lucide-react";

const APP_URL = "https://app.lexgrip.com";

const CATEGORIES: { label: string; desc: string; icon: LucideIcon }[] = [
  {
    label: "Shopping",
    desc: "Prices, sizes, fitting rooms, paying: everything you need at the checkout.",
    icon: ShoppingBag,
  },
  {
    label: "Travel",
    desc: "Flights, luggage, passport control, hotels: words for on the move.",
    icon: Plane,
  },
  {
    label: "Food & Dining",
    desc: "Ordering, the menu, dietary needs, splitting the bill.",
    icon: UtensilsCrossed,
  },
  {
    label: "Work & Office",
    desc: "Meetings, deadlines, reports, remote work: professional vocabulary.",
    icon: Briefcase,
  },
  {
    label: "Health & Body",
    desc: "Symptoms, doctors, pharmacies, prescriptions.",
    icon: Heart,
  },
  {
    label: "Social & Small Talk",
    desc: "Greetings, introductions, keeping a conversation going naturally.",
    icon: Users,
  },
  {
    label: "Home & Family",
    desc: "Renting, moving, neighbours, household repairs, family.",
    icon: Home,
  },
  {
    label: "Transport",
    desc: "Platforms, tickets, traffic, parking, connections.",
    icon: Bus,
  },
  {
    label: "Emergency",
    desc: "Getting help fast: lost, stolen, hospitals, police.",
    icon: AlertTriangle,
  },
  {
    label: "Nature & Weather",
    desc: "Forecasts, storms, outdoor activities, the environment.",
    icon: Cloud,
  },
];

const FEATURES: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Scenario-based vocabulary",
    desc: "Browse real-world situations: the doctor's office, a job interview, a lease negotiation: and study words you'll actually use.",
    icon: MapPin,
  },
  {
    title: "Spaced repetition (FSRS)",
    desc: "Cards come back exactly when you're about to forget them. Built on FSRS, the most effective algorithm available.",
    icon: Clock,
  },
  {
    title: "Pronunciation audio",
    desc: "Every card includes audio so you learn how words actually sound, not just how they're spelled.",
    icon: Volume2,
  },
  {
    title: "AI tutor with memory",
    desc: "Coming soon: have real conversations with a tutor that knows your vocabulary, corrects your mistakes, and never forgets what you've covered.",
    icon: Bot,
  },
  {
    title: "Free to start",
    desc: "10 new words per day on the free plan. Bring your own API key for unlimited generations.",
    icon: Sparkles,
  },
];

const STEPS: { n: string; title: string; desc: string; icon: LucideIcon; soon?: boolean }[] = [
  {
    n: "1",
    title: "Pick your language",
    desc: "Start with Spanish, German, French, or whichever language you're learning. More languages rolling out.",
    icon: Globe,
  },
  {
    n: "2",
    title: "Build your vocabulary",
    desc: "Browse real-world scenarios: ordering coffee, talking to a doctor, negotiating a lease: and add the words you need. Or describe what you want and let AI find the right cards.",
    icon: BookOpen,
  },
  {
    n: "3",
    title: "Study with spaced repetition",
    desc: "Cards come back exactly when you're about to forget them. Built on FSRS, the most effective spaced repetition algorithm available.",
    icon: Brain,
  },
  {
    n: "4",
    title: "Practice with your tutor",
    desc: "Coming soon: real conversations with an AI tutor that knows your vocabulary, corrects your mistakes, and remembers what you've covered.",
    icon: MessageCircle,
    soon: true,
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col px-6 py-5 md:hidden">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Lexgrip logo"
                className="w-8 h-8 shadow rounded-xl object-contain"
              />
              <span className="font-semibold text-gray-900">Lexgrip</span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-gray-500 border border-gray-200 rounded-full p-2 hover:bg-gray-50"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          <nav
            className="flex flex-col gap-3 text-lg font-medium"
            aria-label="Mobile navigation"
          >
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 hover:bg-gray-100"
            >
              How it works
            </a>
            <a
              href="#topics"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 hover:bg-gray-100"
            >
              Topics
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 hover:bg-gray-100"
            >
              Pricing
            </a>
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={APP_URL}
              className="w-full text-center rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Sign in
            </a>
            <a
              href={APP_URL}
              className="w-full text-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600 flex items-center justify-center gap-2"
            >
              Get started free <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <a
            href="/"
            aria-label="Lexgrip home"
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="Lexgrip logo"
              className="w-8 h-8 rounded-xl object-contain shadow"
            />
            <span className="font-semibold text-gray-900">Lexgrip</span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8 text-sm text-gray-500"
            aria-label="Main navigation"
          >
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">
              How it works
            </a>
            <a href="#topics" className="hover:text-gray-900 transition-colors">
              Topics
            </a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_URL}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5"
            >
              Sign in
            </a>
            <a
              href={APP_URL}
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors flex items-center gap-1.5"
            >
              Get started free <ArrowRight size={14} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden border border-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-50"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-100/60 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Left: copy */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
                  <Sparkles size={14} />
                  Free to start · No credit card needed
                </div>
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
                  The language app
                  <br />
                  <span className="text-emerald-500">that remembers you.</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-gray-500 max-w-lg">
                  Most apps treat every session like the first one. Lexgrip
                  knows what you practiced yesterday, where you stumble, and
                  what you're working toward. The longer you use it, the better
                  it gets at teaching you.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
                  >
                    Start for free <ArrowRight size={16} />
                  </a>
                  <a
                    href="#how-it-works"
                    className="rounded-full border border-gray-200 px-7 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    See how it works
                  </a>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                  10 new words per day on the free plan. No credit card required.
                </p>
              </div>

              {/* Right: card mockup */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-xs text-gray-400 mb-1">
                  Tap the card to flip it
                </p>

                <div
                  className="w-full max-w-sm h-56 card-flip-container cursor-pointer select-none"
                  onClick={() => setCardFlipped((f) => !f)}
                  role="button"
                  aria-label="Flip flashcard"
                >
                  <div
                    className={`card-flip-inner w-full h-full ${cardFlipped ? "flipped" : ""}`}
                  >
                    {/* Front */}
                    <div className="card-face w-full h-full bg-white rounded-3xl border border-gray-100 shadow-lg p-8 flex flex-col items-center justify-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1">
                          <Plane size={11} /> Travel
                        </span>
                      </div>
                      <p className="text-4xl font-bold text-gray-900">
                        el equipaje
                      </p>
                      <p className="text-sm text-gray-400 font-mono">
                        /el eˈki.pa.xe/
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Tap to reveal
                      </p>
                    </div>
                    {/* Back */}
                    <div className="card-face card-face-back w-full h-full bg-emerald-500 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white flex items-center gap-1">
                          <Plane size={11} /> Travel
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        the luggage
                      </p>
                      <p className="text-sm text-white/80 italic text-center">
                        "Perdí mi equipaje en el aeropuerto."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini card row */}
                <div className="flex gap-3 w-full max-w-sm">
                  {[
                    { word: "el equipaje", cat: "Travel", Icon: Plane },
                    { word: "la cuenta", cat: "Food & Dining", Icon: UtensilsCrossed },
                    { word: "el atasco", cat: "Transport", Icon: Bus },
                  ].map((c) => (
                    <div
                      key={c.word}
                      className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex flex-col items-center text-center"
                    >
                      <c.Icon size={13} className="text-gray-400" />
                      <p className="text-sm font-bold text-gray-900 mt-1.5 leading-tight">
                        {c.word}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="bg-[#F7FAF8] py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
                How it works
              </p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Four steps to actually learning a language.
              </h2>
            </div>

            <ol
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              aria-label="Steps to get started"
            >
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {step.n}
                    </div>
                    {step.soon && (
                      <span className="text-xs bg-emerald-50 text-emerald-600 font-semibold px-2.5 py-1 rounded-full">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-500">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
                Features
              </p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Built for serious learners.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                    <f.icon size={18} className="text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm leading-6 text-gray-500">{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Topics ── */}
        <section id="topics" className="bg-[#F7FAF8] py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
                Topics
              </p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Learn words for situations you'll actually be in.
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-7">
                Heading on a trip? Pick Travel. Going out for dinner? Pick Food
                & Dining. Every card you generate is built around a real
                situation: not random words pulled from a textbook.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map(({ label, desc, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Icon size={15} className="text-emerald-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                  </div>
                  <p className="text-sm leading-6 text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-24 bg-white">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500 mb-3">
                Pricing
              </p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Founder pricing. 500 spots.
              </h2>
              <p className="mt-4 text-gray-500 text-base leading-7">
                Lexgrip is in early access. The first 500 founding members get a
                permanent deal: same price, forever, even as we raise rates for
                everyone else.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl">
              {/* Free */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Free
                </p>
                <p className="text-4xl font-bold text-gray-900 mb-1">$0</p>
                <p className="text-sm text-gray-400 mb-6">Forever free</p>

                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  {[
                    "10 new words per day",
                    "All scenarios and curated content",
                    "Spaced repetition built in",
                    "Pronunciation audio",
                    "Unlimited study of cards in the library",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-emerald-600" strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  className="block w-full text-center rounded-full border border-emerald-500 text-emerald-600 font-semibold py-3 text-sm hover:bg-emerald-50 transition-colors"
                >
                  Get started free
                </a>
              </div>

              {/* Founder */}
              <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-500 p-8 shadow-lg text-white relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-emerald-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                    500 spots · 0 taken
                  </span>
                </div>

                <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-2">
                  Founder
                </p>
                <p className="text-4xl font-bold mb-1">
                  $5
                  <span className="text-lg font-normal text-white/70">/mo</span>
                </p>
                <p className="text-sm text-white/70 mb-6">Locked in forever</p>

                <ul className="space-y-3 text-sm text-white/90 mb-8">
                  {[
                    "$5/month, locked in forever",
                    "Free upgrade to Pro when the AI tutor launches",
                    "Founder badge in the app",
                    "Direct line to shape what gets built",
                    "Early access to new features",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mt-0.5 shrink-0">
                        <Check size={10} className="text-white" strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  className="flex items-center justify-center gap-2 w-full text-center rounded-full bg-white text-emerald-600 font-bold py-3 text-sm hover:bg-emerald-50 transition-colors"
                >
                  Join as a founder <ArrowRight size={14} />
                </a>
                <p className="mt-3 text-center text-xs text-white/60">
                  Price never goes up: guaranteed.
                </p>
              </div>

              {/* Pro */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Pro
                  </p>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">
                    After founders
                  </span>
                </div>

                <p className="text-4xl font-bold text-gray-900 mb-1">
                  $15
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  For new members after 500 founders
                </p>

                <ul className="space-y-3 text-sm text-gray-500 mb-8">
                  {[
                    "50 new words per day",
                    "AI tutor with persistent memory",
                    "High-quality neural pronunciation",
                    "Priority access to new features",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-gray-400" strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-400 text-center">
                  Get it at $5/mo by joining as a founder now.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-[#F7FAF8] py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="rounded-3xl bg-emerald-500 px-10 py-16 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Start learning today.
              </h2>
              <p className="mt-4 text-base text-white/80 max-w-lg mx-auto leading-relaxed">
                No credit card required. Bring your own API key for unlimited
                word generations, or upgrade to Pro when the AI tutor launches.
              </p>
              <a
                href={APP_URL}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-emerald-600 shadow-sm hover:bg-emerald-50 transition-colors"
              >
                Sign up free <ArrowRight size={16} />
              </a>
              <p className="mt-3 text-xs text-white/60">
                10 new words per day included on the free plan
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="border-t border-gray-100 bg-white py-14"
        aria-label="Site footer"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Lexgrip logo"
                  className="w-8 h-8 shadow rounded-xl object-contain"
                />
                <span className="font-semibold text-gray-900">Lexgrip</span>
              </div>
              <p className="text-sm leading-6 text-gray-500 max-w-xs">
                The language app that actually remembers you.
              </p>
            </div>

            <nav aria-label="Product links">
              <p className="text-sm font-semibold text-gray-900 mb-4">Product</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#how-it-works" className="hover:text-gray-900 transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#topics" className="hover:text-gray-900 transition-colors">
                    Topics
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-gray-900 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href={APP_URL} className="hover:text-gray-900 transition-colors">
                    Sign in
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Legal links">
              <p className="text-sm font-semibold text-gray-900 mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="/privacy" className="hover:text-gray-900 transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-gray-900 transition-colors">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@lexgrip.com" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Lexgrip. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="/privacy" className="hover:text-gray-700 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-gray-700 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
