import { useEffect, useRef, useState, type ReactNode } from "react";
import "@/index.css";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Sparkles,
  Wand2,
  CalendarClock,
  GraduationCap,
  Target,
  Star,
  Volume2,
  KeyRound,
  Gamepad2,
  Quote,
  Search,
  Minus,
  Plus,
  Flame,
  LayoutGrid,
  Bot,
  User,
  Pencil,
  ArrowLeft,
  AudioLines,
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

/* ─────────────────────────────────────────────────────────
   Reveal-on-scroll helper (client-only, SSR-safe)
   ───────────────────────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   iPhone frame.
   Pass `image` to drop in a real screenshot later, e.g.
     <PhoneFrame image="/screens/tutor.png" />
   Otherwise it renders the CSS mock UI passed as children.
   ───────────────────────────────────────────────────────── */
function PhoneFrame({
  children,
  image,
  alt = "LexGrip app screen",
  className = "",
}: {
  children?: ReactNode;
  image?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`phone-frame ${className}`}>
      <div
        className="phone-screen"
        style={image ? { aspectRatio: "auto" } : undefined}
      >
        {image ? (
          <img
            src={image}
            alt={alt}
            className="block h-auto w-full"
          />
        ) : (
          <>
            <div className="phone-notch" />
            {children}
          </>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   App chrome — recreates the real LexGrip UI inside the phone.
   Top bar + bottom tab bar, with a screen rendered in between.
   ───────────────────────────────────────────────────────── */
const TABS = [
  { id: "cards", label: "Cards", Icon: LayoutGrid },
  { id: "learn", label: "Learn", Icon: GraduationCap },
  { id: "tutor", label: "Tutor", Icon: Bot },
  { id: "account", label: "Account", Icon: User },
] as const;

function PhoneChrome({
  title,
  active,
  back = false,
  children,
}: {
  title: string;
  active: (typeof TABS)[number]["id"];
  back?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-[#f7f8f8]">
      {/* top bar */}
      <div className="flex items-center gap-2 border-b border-gray-100 bg-white px-3.5 pt-7 pb-2.5">
        {back ? (
          <>
            <ArrowLeft size={13} className="text-gray-400" />
            <p className="flex-1 text-center text-[11px] font-bold text-gray-900">
              {title}
            </p>
            <span className="w-3" />
          </>
        ) : (
          <>
            <img
              src="/logo.png"
              alt=""
              className="h-5 w-5 rounded-md object-contain"
            />
            <p className="text-[12px] font-bold text-gray-900">{title}</p>
          </>
        )}
      </div>

      {/* screen body */}
      <div className="relative flex-1 overflow-hidden">{children}</div>

      {/* bottom tab bar */}
      <div className="flex items-center justify-around border-t border-gray-100 bg-white px-2 pb-3 pt-1.5">
        {TABS.map(({ id, label, Icon }) => {
          const on = id === active;
          return (
            <div key={id} className="flex flex-col items-center gap-0.5">
              <Icon
                size={15}
                className={on ? "text-emerald-500" : "text-gray-400"}
                strokeWidth={on ? 2.4 : 2}
              />
              <span
                className={`text-[8px] font-medium ${
                  on ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── A single tutor focus-area card: colored header + white body ── */
function FocusCard({
  tag,
  title,
  rate,
  note,
  missed,
  slip,
  wrong,
  right,
  from,
  to,
}: {
  tag: string;
  title: string;
  rate: string;
  note: string;
  missed: string;
  slip: string;
  wrong: string;
  right: string;
  from: string;
  to: string;
}) {
  return (
    <div className="w-[80%] shrink-0 overflow-hidden rounded-2xl bg-white shadow-md">
      {/* colored top half */}
      <div className={`bg-gradient-to-br ${from} ${to} p-3 text-white`}>
        <div className="flex items-start justify-between">
          <p className="text-[7px] font-bold uppercase tracking-widest text-white/80">
            {tag}
          </p>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
            <Flame size={10} className="text-white" />
          </div>
        </div>
        <p className="mt-2 text-[13px] font-bold leading-none">{title}</p>
        <div className="mt-1 flex items-end gap-1.5">
          <p className="text-[26px] font-extrabold leading-none">{rate}</p>
          <div className="pb-0.5">
            <p className="text-[8px] font-semibold leading-tight">miss rate</p>
            <p className="text-[7px] leading-tight text-white/80">{note}</p>
          </div>
        </div>
      </div>
      {/* white body */}
      <div className="p-2.5">
        <p className="text-[9px] text-gray-700">{missed}</p>
        <div className="mt-1.5 rounded-lg border border-gray-100 bg-gray-50 p-2">
          <p className="text-[8px] font-bold uppercase tracking-wide text-gray-400">
            Recent slip
          </p>
          <p className="mt-1 text-[8.5px] italic leading-snug text-gray-600">
            {slip}
          </p>
          <div className="mt-1.5 space-y-0.5">
            <p className="flex items-center gap-1 text-[9px] text-rose-500">
              <X size={9} strokeWidth={3} />
              <span className="line-through">{wrong}</span>
            </p>
            <p className="flex items-center gap-1 text-[9px] font-semibold text-emerald-600">
              <Check size={9} strokeWidth={3} /> {right}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Tutor — the star. Focus areas keyed to your mistakes. ── */
function TutorScreen() {
  return (
    <PhoneChrome title="Tutor" active="tutor">
      <div className="flex h-full flex-col px-3.5 pt-3">
        <p className="text-[14px] font-bold leading-none text-gray-900">
          Your tutor
        </p>
        <p className="mt-1 text-[9px] leading-snug text-gray-500">
          Each session targets the patterns you miss most.
        </p>

        {/* stats */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-gray-100 bg-white p-2.5 text-center shadow-sm">
            <p className="flex items-center justify-center gap-1 text-[13px] font-bold text-gray-900">
              <Flame size={11} className="text-orange-500" /> 2
            </p>
            <p className="text-[8px] text-gray-400">day streak</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-2.5 text-center shadow-sm">
            <p className="text-[13px] font-bold text-gray-900">2</p>
            <p className="text-[8px] text-gray-400">weak spots</p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">
            Focus areas
          </p>
          <p className="text-[8px] text-gray-400">swipe →</p>
        </div>

        {/* focus cards — colored header, white body in one card */}
        <div className="mt-1.5 flex gap-2 overflow-hidden">
          {/* primary */}
          <FocusCard
            tag="Lexicon"
            title="False Friend"
            rate="59%"
            note="Often picks the wrong form"
            missed="Missed in 6 of 13 attempts."
            slip="“Ich war glücklich, als ich dich gestern mit einem freundlichen Guten Tag begrüßte.”"
            wrong="hallo"
            right="Guten Tag"
            from="from-orange-400"
            to="to-orange-600"
          />
          {/* next card, peeking off the edge */}
          <FocusCard
            tag="Syntax"
            title="Subordination"
            rate="100%"
            note="Verb in the wrong position"
            missed="Missed in 3 of 3 attempts."
            slip="“Ich weiß, dass ich gestern zu spät gekommen bin.”"
            wrong="bin gekommen"
            right="gekommen bin"
            from="from-pink-400"
            to="to-rose-600"
          />
        </div>

        <div className="mt-auto pb-3 pt-2.5">
          <div className="flex items-center justify-center gap-1.5 rounded-full bg-emerald-500 py-2.5">
            <Sparkles size={11} className="text-white" />
            <span className="text-[10px] font-semibold text-white">
              Start session
            </span>
          </div>
        </div>
      </div>
    </PhoneChrome>
  );
}

/* ── Learn — FSRS flashcard review ── */
function LearnScreen() {
  return (
    <PhoneChrome title="Learn" active="learn">
      <div className="flex h-full flex-col px-3.5 pt-3">
        {/* progress */}
        <div className="flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[6%] rounded-full bg-emerald-500" />
          </div>
          <span className="text-[8px] text-gray-400">0 / 16</span>
          <X size={11} className="text-gray-300" />
        </div>

        {/* card */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="w-full rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 px-4 py-7 text-center text-white shadow-lg">
            <p className="text-[7px] font-bold uppercase tracking-widest text-white/70">
              Feelings &amp; Opinions
            </p>
            <p className="mt-3 text-[22px] font-bold leading-none">satisfied</p>
            <div className="mx-auto my-3 h-px w-3/4 bg-white/30" />
            <p className="text-[9px] italic leading-snug text-white/90">
              “Sie ist mit ihrer Arbeit heute zufrieden.”
            </p>
          </div>

          {/* audio controls */}
          <div className="mt-3 flex gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1.5 shadow-sm">
              <Volume2 size={11} className="text-emerald-600" />
              <div className="leading-none">
                <p className="text-[8px] font-semibold text-gray-800">Listen</p>
                <p className="text-[6.5px] text-emerald-500">Browser voice</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1.5 shadow-sm">
              <AudioLines size={11} className="text-violet-600" />
              <div className="leading-none">
                <p className="text-[8px] font-semibold text-violet-700">
                  AI voice
                </p>
                <p className="text-[6.5px] font-semibold text-violet-400">
                  COMING SOON
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* rating */}
        <div className="pb-3">
          <p className="mb-1.5 text-center text-[8px] text-gray-400">
            How well did you remember?
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { l: "Again", c: "bg-rose-50 text-rose-500" },
              { l: "Hard", c: "bg-amber-50 text-amber-500" },
              { l: "Good", c: "bg-emerald-500 text-white" },
              { l: "Easy", c: "bg-sky-50 text-sky-500" },
            ].map((b) => (
              <div
                key={b.l}
                className={`rounded-xl py-2 text-center text-[9px] font-semibold ${b.c}`}
              >
                {b.l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneChrome>
  );
}

/* ── Generate — scenario selection ── */
const SCENARIO_PILLS: { label: string; c: string }[] = [
  { label: "Family & Relationships", c: "bg-rose-50 text-rose-600" },
  { label: "Feelings & Opinions", c: "bg-violet-50 text-violet-600" },
  { label: "Food & Dining", c: "bg-emerald-50 text-emerald-600" },
  { label: "Greetings & Small Talk", c: "bg-sky-50 text-sky-600" },
  { label: "Health & Body", c: "bg-rose-50 text-rose-600" },
  { label: "Home & Daily Routine", c: "bg-emerald-50 text-emerald-600" },
  { label: "Technology & Comms", c: "bg-violet-50 text-violet-600" },
  { label: "Time, Numbers & Plans", c: "bg-cyan-50 text-cyan-600" },
  { label: "Travel & Getting Around", c: "bg-blue-50 text-blue-600" },
  { label: "Shopping & Money", c: "bg-amber-50 text-amber-600" },
];

function GenerateScreen() {
  return (
    <PhoneChrome title="Generate Cards" active="cards" back>
      <div className="flex h-full flex-col px-3.5 pt-3">
        <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">
          Scenario selection
        </p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {SCENARIO_PILLS.map((p) => (
            <div
              key={p.label}
              className={`truncate rounded-lg px-2 py-2 text-[8.5px] font-semibold ${p.c}`}
            >
              {p.label}
            </div>
          ))}
        </div>

        <div className="my-2.5 flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-200" />
          <p className="text-[7.5px] text-gray-400">or describe what you need</p>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-2.5 py-2.5">
          <Search size={11} className="text-gray-300" />
          <p className="text-[9px] text-gray-400">
            Describe the flashcards you want
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl border border-gray-100 bg-white px-2.5 py-2 shadow-sm">
          <div>
            <p className="text-[9px] font-semibold text-gray-800">
              Cards to generate
            </p>
            <p className="text-[7px] text-gray-400">1–15 cards</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-200">
              <Minus size={9} className="text-gray-400" />
            </div>
            <span className="text-[11px] font-bold text-gray-900">5</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-200">
              <Plus size={9} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mt-auto pb-3 pt-2.5">
          <div className="flex items-center justify-center gap-1.5 rounded-full bg-emerald-300 py-2.5">
            <Wand2 size={11} className="text-white" />
            <span className="text-[9px] font-semibold text-white">
              Select a scenario or describe above
            </span>
          </div>
        </div>
      </div>
    </PhoneChrome>
  );
}

/* ── Cards — the deck ── */
const DECK_CARDS: { cat: string; word: string; tr: string; c: string }[] = [
  {
    cat: "Time, Numbers & Plans",
    word: "tausendmal",
    tr: "a thousand times",
    c: "bg-cyan-50",
  },
  { cat: "Problem Solving", word: "lösen", tr: "solve", c: "bg-indigo-50" },
  { cat: "Work & Study", word: "die Aufgabe", tr: "task", c: "bg-gray-100" },
  {
    cat: "Complex Structures",
    word: "komplex",
    tr: "complex",
    c: "bg-pink-50",
  },
  { cat: "Greetings & Small Talk", word: "Servus", tr: "Hi", c: "bg-sky-50" },
  { cat: "Greetings & Small Talk", word: "danke", tr: "thanks", c: "bg-sky-50" },
  { cat: "Greetings & Small Talk", word: "Abend", tr: "evening", c: "bg-sky-50" },
  { cat: "Greetings & Small Talk", word: "heute", tr: "today", c: "bg-sky-50" },
];

function CardsScreen() {
  return (
    <PhoneChrome title="Cards" active="cards">
      <div className="flex h-full flex-col px-3 pt-2.5">
        <div className="flex items-center justify-end gap-1.5">
          <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1.5">
            <Pencil size={9} className="text-gray-500" />
            <span className="text-[8px] font-medium text-gray-700">
              Add manually
            </span>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-emerald-500 px-2 py-1.5">
            <Sparkles size={9} className="text-white" />
            <span className="text-[8px] font-semibold text-white">
              Generate Cards
            </span>
          </div>
        </div>
        <p className="mt-2 text-[8px] text-gray-400">29 cards</p>

        <div className="mt-1.5 grid flex-1 grid-cols-2 content-start gap-1.5 overflow-hidden">
          {DECK_CARDS.map((c, i) => (
            <div key={i} className={`rounded-xl p-2.5 ${c.c}`}>
              <p className="truncate text-[6.5px] font-bold uppercase tracking-wide text-gray-500">
                {c.cat}
              </p>
              <p className="mt-1 text-[11px] font-bold leading-none text-gray-900">
                {c.word}
              </p>
              <p className="mt-1 text-[8px] text-gray-500">{c.tr}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneChrome>
  );
}

/* ─────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────── */
const LOOP: {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  ai?: boolean;
}[] = [
  {
    n: "01",
    title: "Generate",
    desc: "Describe a scenario like ordering at a restaurant, passport control, or a lease negotiation, and AI builds vocabulary cards scoped to it, each with a translation, a usage example, and audio.",
    icon: Wand2,
  },
  {
    n: "02",
    title: "Review with FSRS",
    desc: "Cards enter a scheduler powered by FSRS that models memory decay per card and surfaces each one at the exact moment you're about to forget it.",
    icon: CalendarClock,
  },
  {
    n: "03",
    title: "Practice with the tutor",
    desc: "When reviews are done, the AI tutor builds fresh sentences mostly from words you already know, then trickles in a few new ones to keep you growing.",
    icon: GraduationCap,
    ai: true,
  },
  {
    n: "04",
    title: "Correct & resurface",
    desc: "Every mistake is captured into a personal error profile. The tutor keeps resurfacing your weak spots in new contexts until your accuracy recovers.",
    icon: Target,
    ai: true,
  },
];

const CATEGORIES: { label: string; icon: LucideIcon }[] = [
  { label: "Shopping", icon: ShoppingBag },
  { label: "Travel", icon: Plane },
  { label: "Food & Dining", icon: UtensilsCrossed },
  { label: "Work & Office", icon: Briefcase },
  { label: "Health & Body", icon: Heart },
  { label: "Social & Small Talk", icon: Users },
  { label: "Home & Family", icon: Home },
  { label: "Transport", icon: Bus },
  { label: "Emergency", icon: AlertTriangle },
  { label: "Nature & Weather", icon: Cloud },
];

const REVIEWS: { name: string; lang: string; quote: string }[] = [
  {
    name: "Marie L.",
    lang: "Learning French",
    quote:
      "The tutor actually remembers the gender mistakes I keep making and won't let them slide. Nothing else does that.",
  },
  {
    name: "Daniel K.",
    lang: "Learning Spanish",
    quote:
      "I generated a deck for my trip to Madrid in two minutes. By the time I landed I could actually use the words.",
  },
  {
    name: "Aisha R.",
    lang: "Learning German",
    quote:
      "FSRS plus the mistake tracking means I stopped wasting time on words I already know. It's ruthlessly efficient.",
  },
  {
    name: "Tom B.",
    lang: "Learning Spanish",
    quote:
      "Bringing my own API key means unlimited generations for basically free. Wild that this exists.",
  },
  {
    name: "Sofia M.",
    lang: "Learning French",
    quote:
      "It feels like a tutor that did their homework on me before the lesson. Every session targets my weak spots.",
  },
];

const PRICING: {
  name: string;
  price: string;
  per?: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
  ai?: boolean;
  badge?: string;
}[] = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    blurb: "Everything you need to build the habit.",
    features: [
      "10 scenario cards per day",
      "3 of your own prompted cards per day",
      "Full FSRS spaced repetition",
      "Learning games (coming soon)",
      "Browser text-to-speech audio",
    ],
    cta: "Get started free",
  },
  {
    name: "BYOK",
    price: "$0",
    per: "bring your own key",
    blurb: "Plug in your own AI key. Pay your provider, nothing to us.",
    features: [
      "Unlimited scenario & prompted cards",
      "Unlimited AI tutor access",
      "Full FSRS spaced repetition",
      "Learning games (coming soon)",
      "Browser text-to-speech audio",
    ],
    cta: "Connect your key",
    featured: true,
    ai: true,
    badge: "Most popular",
  },
  {
    name: "Pro",
    price: "$9.99",
    per: "/mo",
    blurb: "BYOK power, but we run the AI. No keys, no setup.",
    features: [
      "Everything in BYOK, managed for you",
      "No API key required",
      "Unlimited tutor & generations",
      "High-quality neural TTS (coming soon)",
      "Priority access to new features",
    ],
    cta: "Go Pro",
  },
];

/* ─────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────── */
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white px-6 py-5 md:hidden">
          <div className="mb-10 flex items-center justify-between">
            <Brand />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-gray-200 p-2 text-gray-500 hover:bg-gray-50"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>
          <nav
            className="flex flex-col gap-3 text-lg font-medium"
            aria-label="Mobile navigation"
          >
            {[
              ["#how-it-works", "How it works"],
              ["#tutor", "AI tutor"],
              ["#scenarios", "Scenarios"],
              ["#pricing", "Pricing"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 hover:bg-gray-100"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={APP_URL}
              className="w-full rounded-full border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Sign in
            </a>
            <a
              href={APP_URL}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Get started free <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <a href="/" aria-label="LexGrip home">
            <Brand />
          </a>
          <nav
            className="hidden items-center gap-8 text-sm text-gray-500 md:flex"
            aria-label="Main navigation"
          >
            <a href="#how-it-works" className="transition-colors hover:text-gray-900">
              How it works
            </a>
            <a href="#tutor" className="transition-colors hover:text-violet-600">
              AI tutor
            </a>
            <a href="#scenarios" className="transition-colors hover:text-gray-900">
              Scenarios
            </a>
            <a href="#pricing" className="transition-colors hover:text-gray-900">
              Pricing
            </a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={APP_URL}
              className="px-3 py-1.5 text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href={APP_URL}
              className="flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Get started free <ArrowRight size={14} />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="rounded-full border border-gray-200 p-2 text-gray-700 hover:bg-gray-50 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="absolute top-20 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-violet-200/50 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
                  <Sparkles size={14} />
                  The AI tutor is live
                </div>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Learn the words.{" "}
                  <span className="text-gradient-ai">Master your mistakes.</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
                  LexGrip generates vocabulary for the situations you'll
                  actually be in, schedules it with FSRS spaced repetition,
                  and runs an AI tutor that learns from every mistake you make,
                  then drills it until it sticks.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600"
                  >
                    Start for free <ArrowRight size={16} />
                  </a>
                  <a
                    href="#tutor"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Meet the tutor
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    Loved by early learners in French, German, and Spanish
                  </p>
                </div>
              </Reveal>

              {/* Phones */}
              <Reveal delay={120}>
                <div className="relative flex items-center justify-center">
                  <div className="animate-glow pointer-events-none absolute inset-0 -z-10 mx-auto h-72 w-72 self-center rounded-full bg-violet-300/40 blur-3xl" />
                  <PhoneFrame className="animate-float z-10 -mr-8 rotate-[-4deg]">
                    <TutorScreen />
                  </PhoneFrame>
                  <PhoneFrame className="animate-float-delayed hidden scale-95 rotate-[5deg] opacity-95 sm:block">
                    <LearnScreen />
                  </PhoneFrame>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Reviews marquee ── */}
        <section className="border-y border-gray-100 bg-[#F7FAF8] py-8">
          <div className="mx-auto mb-6 max-w-6xl px-5 md:px-8">
            <p className="text-center text-sm font-medium text-gray-400">
              What early learners are saying
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-4">
              {[...REVIEWS, ...REVIEWS].map((r, i) => (
                <div
                  key={i}
                  className="w-80 shrink-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <Quote size={16} className="mb-2 text-emerald-400" />
                  <p className="text-sm leading-6 text-gray-700">{r.quote}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">
                        {r.name}
                      </p>
                      <p className="text-[11px] text-gray-400">{r.lang}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Learning Loop ── */}
        <section id="how-it-works" className="py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="mb-14 max-w-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-500">
                The learning loop
              </p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                From a word you don't know to one you won't forget.
              </h2>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {LOOP.map((step, i) => (
                <Reveal key={step.n} delay={i * 60}>
                  <div
                    className={`group h-full rounded-2xl border p-7 shadow-sm transition-shadow hover:shadow-md ${
                      step.ai
                        ? "border-violet-100 bg-violet-50/40"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                          step.ai
                            ? "bg-violet-600 text-white"
                            : "bg-emerald-500 text-white"
                        }`}
                      >
                        <step.icon size={20} />
                      </div>
                      <span
                        className={`text-2xl font-bold ${
                          step.ai ? "text-violet-200" : "text-gray-200"
                        }`}
                      >
                        {step.n}
                      </span>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      {step.ai && (
                        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-violet-700">
                          AI
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-6 text-gray-500">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Tutor (dark, purple) — the value prop ── */}
        <section
          id="tutor"
          className="relative overflow-hidden bg-[#0d0b1a] py-24 text-white"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-glow absolute left-1/3 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <Reveal className="order-2 lg:order-1">
                <div className="relative flex justify-center">
                  <PhoneFrame className="animate-float">
                    <TutorScreen />
                  </PhoneFrame>
                </div>
              </Reveal>

              <Reveal delay={100} className="order-1 lg:order-2">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-200">
                  <GraduationCap size={14} />
                  The AI tutor
                </div>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  A tutor that{" "}
                  <span className="text-gradient-ai">learns your mistakes</span>{" "}
                  and won't let them slide.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-violet-100/70">
                  Most apps quiz you on random words you've never seen. The
                  LexGrip tutor builds fresh sentences mostly from the vocabulary
                  you already know, grades how you actually produce the language,
                  and turns every slip into your next lesson.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      icon: Target,
                      t: "Every mistake is captured",
                      d: "The tutor builds a personal error profile of exactly where you slip: gender, conjugation, agreement, word choice.",
                    },
                    {
                      icon: GraduationCap,
                      t: "It resurfaces your weak spots",
                      d: "It keeps serving the things you get wrong back to you in new contexts until your accuracy recovers.",
                    },
                    {
                      icon: Sparkles,
                      t: "It keeps you growing",
                      d: "Sentences lean on words you know, then trickle in new ones that feed straight back into your deck to learn.",
                    },
                  ].map((f) => (
                    <div key={f.t} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                        <f.icon size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{f.t}</p>
                        <p className="text-sm leading-6 text-violet-100/60">
                          {f.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={APP_URL}
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-900/40 transition-colors hover:bg-violet-400"
                >
                  Try the tutor free <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Topics ── */}
        <section id="scenarios" className="bg-[#F7FAF8] py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-500">
                  Scenarios
                </p>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Learn words for situations you'll actually be in.
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-500">
                  Heading on a trip? Generate a Travel deck. Going out for
                  dinner? Food &amp; Dining. Every card you create is built
                  around a real situation, not random words pulled from a
                  textbook.
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {CATEGORIES.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                    >
                      <Icon size={14} className="text-emerald-500" />
                      {label}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="flex items-center justify-center">
                  <PhoneFrame className="animate-float z-10 -mr-8 rotate-[-4deg]">
                    <GenerateScreen />
                  </PhoneFrame>
                  <PhoneFrame className="animate-float-delayed hidden scale-95 rotate-[5deg] opacity-95 sm:block">
                    <CardsScreen />
                  </PhoneFrame>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="mb-14 max-w-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-500">
                Pricing
              </p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Free to learn. Yours to scale.
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-500">
                Start completely free. Bring your own AI key for unlimited
                everything at no cost to us, or let us run the AI for you on
                Pro.
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {PRICING.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 70}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl p-8 shadow-sm ${
                      tier.featured
                        ? "border-2 border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-200"
                        : "border border-gray-100 bg-white"
                    }`}
                  >
                    {tier.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-600 shadow-sm">
                          <KeyRound size={11} /> {tier.badge}
                        </span>
                      </div>
                    )}

                    <p
                      className={`mb-2 text-sm font-semibold uppercase tracking-wide ${
                        tier.featured ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      {tier.name}
                    </p>
                    <div className="mb-1 flex items-end gap-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.per && (
                        <span
                          className={`pb-1 text-sm ${
                            tier.featured ? "text-white/70" : "text-gray-400"
                          }`}
                        >
                          {tier.per}
                        </span>
                      )}
                    </div>
                    <p
                      className={`mb-6 text-sm ${
                        tier.featured ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {tier.blurb}
                    </p>

                    <ul className="mb-8 space-y-3 text-sm">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <div
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              tier.featured ? "bg-white/20" : "bg-emerald-100"
                            }`}
                          >
                            <Check
                              size={10}
                              strokeWidth={3}
                              className={
                                tier.featured
                                  ? "text-white"
                                  : "text-emerald-600"
                              }
                            />
                          </div>
                          <span
                            className={
                              tier.featured ? "text-white/90" : "text-gray-600"
                            }
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={APP_URL}
                      className={`mt-auto flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors ${
                        tier.featured
                          ? "bg-white text-violet-600 hover:bg-violet-50"
                          : "border border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                      }`}
                    >
                      {tier.cta}
                      {tier.featured && <ArrowRight size={14} />}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8">
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-[#F7FAF8] p-6 text-sm text-gray-500 sm:flex-row sm:justify-center sm:gap-8">
                <span className="flex items-center gap-2">
                  <Gamepad2 size={16} className="text-emerald-500" /> Learning
                  games coming soon
                </span>
                <span className="flex items-center gap-2">
                  <Volume2 size={16} className="text-emerald-500" /> Neural TTS
                  on the roadmap
                </span>
                <span className="flex items-center gap-2">
                  <KeyRound size={16} className="text-violet-500" /> BYOK keeps
                  it unlimited
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-500 to-violet-600 px-8 py-16 text-center md:px-10">
                <div className="pointer-events-none absolute inset-0 opacity-30">
                  <div className="absolute -right-10 top-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
                </div>
                <div className="relative">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Where every slip tightens your grip.
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/80">
                    Free to start, no credit card. Bring your own key for
                    unlimited generations and tutor sessions. The AI tutor is
                    live and waiting for your first mistake.
                  </p>
                  <a
                    href={APP_URL}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-emerald-600 shadow-sm transition-colors hover:bg-emerald-50"
                  >
                    Sign up free <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
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
              <Brand className="mb-4" />
              <p className="max-w-xs text-sm leading-6 text-gray-500">
                The language app that learns your mistakes and drills them until
                they stick.
              </p>
            </div>

            <nav aria-label="Product links">
              <p className="mb-4 text-sm font-semibold text-gray-900">Product</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {[
                  ["#how-it-works", "How it works"],
                  ["#tutor", "AI tutor"],
                  ["#scenarios", "Scenarios"],
                  ["#pricing", "Pricing"],
                  [APP_URL, "Sign in"],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a href={href} className="transition-colors hover:text-gray-900">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal links">
              <p className="mb-4 text-sm font-semibold text-gray-900">Legal</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="/privacy" className="transition-colors hover:text-gray-900">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="transition-colors hover:text-gray-900">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@lexgrip.com"
                    className="transition-colors hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400 md:flex-row">
            <p>© {new Date().getFullYear()} LexGrip. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="/privacy" className="transition-colors hover:text-gray-700">
                Privacy
              </a>
              <a href="/terms" className="transition-colors hover:text-gray-700">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Brand lockup ── */
function Brand({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/logo.png"
        alt="LexGrip logo"
        className="h-8 w-8 rounded-xl object-contain shadow"
      />
      <span className="font-semibold text-gray-900">LexGrip</span>
    </div>
  );
}
