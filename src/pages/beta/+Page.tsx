import "@/index.css";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Sparkles,
  KeyRound,
  Users,
} from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

const DISCORD_URL = "https://discord.gg/yCubCRvjH";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Join the Discord",
    body: "Everything about the beta lives there - the invite link, release notes, and the people building it.",
  },
  {
    icon: KeyRound,
    title: "Grab an invite",
    body: "Head to the #beta channel and ask for access. We hand out invites in batches so we can keep up with feedback.",
  },
  {
    icon: Sparkles,
    title: "Start learning",
    body: "Founding members get the full app - scenario decks, the FSRS engine, and the AI tutor that drills your mistakes.",
  },
];

export default function BetaPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 antialiased">
      <GridPattern
        width={40}
        height={40}
        strokeDasharray="4 2"
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-60"
      />

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col px-5 py-10 md:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeft size={15} /> Back to lexgrip.com
        </a>

        <main className="flex flex-1 flex-col justify-center py-16">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="LexGrip logo"
              className="h-10 w-10 rounded-xl object-contain shadow"
            />
            <span className="text-lg font-semibold text-gray-900">LexGrip</span>
          </div>

          <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <Users size={13} /> Founding spots open
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Join the beta. Become a founding member.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
            LexGrip is not open to the public yet. Access goes out through
            our Discord so we can onboard people in small groups and read every
            piece of feedback. Get in now and you come in as a founding member -
            early access, a direct line to the people building it, and a real
            say in what ships next. Join the server for the details.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#4752c4]"
            >
              <MessageCircle size={17} /> Join the Discord{" "}
              <ArrowRight size={16} />
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Read what LexGrip does
            </a>
          </div>

          <ol className="mt-14 grid gap-6 sm:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <li
                key={title}
                className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon size={15} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Step {i + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-900">
                  {title}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-gray-500">{body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-gray-500">
            Questions:{" "}
            <a
              href="mailto:team@lexgrip.com"
              className="font-medium text-emerald-600 transition-colors hover:text-emerald-700"
            >
              team@lexgrip.com
            </a>
          </p>
        </main>

        <footer className="border-t border-gray-100 pt-6 text-xs text-gray-400">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} LexGrip. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="/privacy" className="transition-colors hover:text-gray-700">
                Privacy
              </a>
              <a href="/terms" className="transition-colors hover:text-gray-700">
                Terms
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-gray-700"
              >
                Discord
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
