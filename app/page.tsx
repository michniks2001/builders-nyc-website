import Image from "next/image";
import { InterestForm } from "@/components/landing/interest-form";
import { MotionAccordion } from "@/components/unlumen-ui/motion-accordion";
import { Separator } from "@/components/ui/separator";
import { TransportBadge } from "@/components/ui/transport-badge";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#contact", label: "Contact" },
];

const audienceCards = [
  {
    title: "For Builders",
    description:
      "Try new tools, ship small projects, meet other technical people, and sharpen your product instincts.",
    detail: "Work on ideas that feel like real product moments, not toy examples.",
  },
  {
    title: "For Startups",
    description:
      "Get developers using your product in the room and hear honest, practical feedback.",
    detail: "Watch people build, observe where friction appears, and iterate faster.",
  },
  {
    title: "For Sponsors & Venues",
    description:
      "Support a builder-focused community creating useful technical events in NYC.",
    detail: "Help power an energetic technical scene while staying visible to builders.",
  },
];

const whyItems = [
  {
    question: "Hands-on by default",
    answer:
      "Every event is built around making something tangible, not standing around swapping business cards.",
  },
  {
    question: "Built for real feedback",
    answer:
      "Founders and product teams get practical feedback from people actively building with their tools.",
  },
  {
    question: "Focused on practical community",
    answer:
      "Builders NYC creates repeatable events where technical people can learn, ship, and support each other.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-gradient-to-b from-[#eaf6ff] via-[#fff9ea] via-50% to-[#eef8ff] text-slate-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(42% 38% at 10% 14%, #BDE0FE 0%, transparent 72%), radial-gradient(35% 36% at 85% 12%, #FFF3B0 0%, transparent 74%), radial-gradient(40% 34% at 56% 82%, rgba(189,224,254,0.55) 0%, transparent 74%)",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#BDE0FE]/60 blur-3xl" />
      <div className="pointer-events-none absolute top-72 right-10 h-64 w-64 rounded-full bg-[#FFF3B0]/60 blur-3xl" />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-6 pb-16 pt-8 sm:px-10 lg:px-14">
        <header className="sticky top-4 z-20 rounded-[1.75rem] bg-white/40 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-5">
            <a href="#" className="inline-flex items-center">
              <Image
                src="/builders-nyc-logo.svg"
                alt="Builders NYC"
                width={180}
                height={80}
                priority
                className="h-10 w-auto sm:h-11"
              />
            </a>
            <div className="hidden items-center gap-4 md:flex">
              <nav className="flex items-center gap-1 rounded-full bg-[#f7fbff]/70 p-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-white hover:text-[#0404d4]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#fc8c03] px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#f58a13]"
              >
                Join the Waitlist
              </a>
              <div className="flex items-center gap-1 rounded-full bg-white/65 px-2 py-1">
                <TransportBadge system="NYC" stationCode="A1" size="xs" />
                <TransportBadge system="NYC" stationCode="B1" size="xs" />
                <TransportBadge system="NYC" stationCode="N1" size="xs" />
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex h-8 items-center justify-center rounded-full bg-[#fc8c03] px-3 text-sm font-semibold text-white transition-colors hover:bg-[#f58a13] md:hidden"
            >
              Join
            </a>
          </div>
          <div className="mt-3 flex items-center gap-4 overflow-x-auto text-sm text-slate-700 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </div>
        </header>

        <section className="relative rounded-[2rem] p-8 sm:p-12">
          <div className="relative">
            <div className="mt-3">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <TransportBadge
                  system="NYC"
                  stationCode={["A1", "C1", "E1"]}
                  size="sm"
                  showStationName
                  stationName="Builder Express"
                />
                <TransportBadge
                  system="NYC"
                  stationCode={["B1", "D1", "F1", "M1"]}
                  size="sm"
                  showStationName
                  stationName="Founder Local"
                />
                <TransportBadge
                  system="NYC"
                  stationCode={["N1", "Q1", "R1"]}
                  size="sm"
                  showStationName
                  stationName="Demo Line"
                />
              </div>
              <h1 className="sr-only">Build with NYC&apos;s next wave of founders.</h1>
              <TypewriterEffectSmooth
                words={[
                  { text: "Build", className: "text-slate-900" },
                  { text: "with", className: "text-slate-900" },
                  { text: "NYC's", className: "text-[#0404d4]" },
                  { text: "next", className: "text-slate-900" },
                  { text: "wave", className: "text-slate-900" },
                  { text: "of", className: "text-slate-900" },
                  { text: "founders.", className: "text-[#fc8c03]" },
                ]}
                className="my-0 justify-start"
                cursorClassName="h-7 w-[3px] bg-[#0404d4] sm:h-9 md:h-12"
              />
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Builders NYC hosts hands-on hack nights where developers, founders,
                and startup teams build with real products, demo what they make,
                and give direct feedback to the people behind the tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#fc8c03] px-5 text-sm font-semibold text-white shadow-[0_14px_24px_-18px_rgba(0,0,0,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#f58a13]"
                >
                  Join the Waitlist
                </a>
                <a
                  href="#sponsors"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[#0404d4]/40 bg-white px-5 text-sm font-semibold text-[#0404d4] transition-colors hover:bg-[#eef3ff]"
                >
                  Sponsor an Event
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div id="about" className="scroll-mt-24">
            <div className="mb-8 flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#0404d4]/75 uppercase">
                Audience
              </p>
              <div className="flex items-center gap-2">
                <TransportBadge system="NYC" stationCode="G1" size="xs" />
                <TransportBadge system="NYC" stationCode="L1" size="xs" />
                <TransportBadge system="NYC" stationCode="SEV1" size="xs" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Who it&apos;s for
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {audienceCards.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[1.65rem] p-6"
                >
                  <p className="mb-5 text-xs font-semibold tracking-[0.12em] text-[#0404d4]/70 uppercase">
                    Builders NYC
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-700">
                    {item.description}
                  </p>
                  <p className="mt-4 pt-4 text-sm text-slate-600">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div id="sponsors" className="scroll-mt-24">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#0404d4]/75 uppercase">
                Why Builders NYC
              </p>
              <div className="mt-2 flex items-center gap-2">
                <TransportBadge system="NYC" stationCode="A2" size="xs" />
                <TransportBadge system="NYC" stationCode="F2" size="xs" />
                <TransportBadge system="NYC" stationCode="N2" size="xs" />
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Not another networking event.
              </h2>
              <p className="mt-4 leading-relaxed text-slate-700">
                Builders NYC is built around doing. Every event is designed to get
                people making, testing, presenting, and learning from each other.
                The goal is simple: bring NYC&apos;s builders into the same room and
                give them a reason to create.
              </p>
            </div>
            <MotionAccordion items={whyItems} className="rounded-3xl p-1" />
          </div>
        </section>

        <Separator className="bg-gradient-to-r from-[#0404d4]/50 via-[#fc8c03]/60 to-[#fcdf03]/70" />

        <section id="contact" className="scroll-mt-24">
          <div className="grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div className="rounded-[1.5rem] p-6">
              <div className="mb-4 flex items-center gap-2">
                <TransportBadge system="NYC" stationCode="J1" size="xs" />
                <TransportBadge system="NYC" stationCode="Z1" size="xs" />
                <TransportBadge system="NYC" stationCode="T1" size="xs" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">Want in?</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                Join the waitlist, sponsor an event, host us, or reach out about
                demoing your product.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#0404d4]" />
                  We follow up with upcoming event details.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#fc8c03]" />
                  Sponsors and venues get partnership options.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#fcdf03]" />
                  Builders hear when registration opens.
                </li>
              </ul>
            </div>
            <InterestForm />
          </div>
        </section>
      </main>

      <footer className="bg-transparent">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 px-6 py-8 sm:px-10 md:flex-row lg:px-14">
          <div>
            <Image
              src="/builders-nyc-logo.svg"
              alt="Builders NYC"
              width={160}
              height={72}
              className="mb-2 h-9 w-auto"
            />
            <p className="text-sm text-slate-700">
              Hands-on events for NYC builders, founders, and startup teams.
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm text-slate-700">
            <a href="#sponsors" className="hover:text-slate-950">
              Sponsors
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
