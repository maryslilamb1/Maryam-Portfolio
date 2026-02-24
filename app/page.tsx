import Image from "next/image";
import { profile } from "@/lib/profile";
import { Github, Linkedin, Mail, FileText, Sparkles, Stars } from "lucide-react";
import Section from "@/components/Section";
import Pill from "@/components/Pill";
import Footer from "@/components/Footer";
import Sticker from "../components/stickers"; // keep this if your file is components/stickers.tsx
import StatCard from "@/components/StatCard";
import Divider from "@/components/Divider";
import ChatCard from "@/components/ChatCard";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Forest Dream Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* base moss gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-amber-50 to-lime-100" />

        {/* layered depth glows */}
        <div className="absolute -top-48 -left-48 h-[720px] w-[720px] rounded-full bg-emerald-300/35 blur-[160px]" />
        <div className="absolute top-1/3 -right-56 h-[680px] w-[680px] rounded-full bg-lime-300/30 blur-[160px]" />
        <div className="absolute -bottom-60 left-1/3 h-[760px] w-[760px] rounded-full bg-amber-200/35 blur-[170px]" />

        {/* golden sunlight beams */}
        <div className="absolute inset-0 opacity-60 mix-blend-soft-light bg-[conic-gradient(from_210deg_at_20%_20%,rgba(255,210,120,0.55),transparent_35%,rgba(255,210,120,0.30),transparent_70%,rgba(255,210,120,0.45))]" />
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_20%_25%,rgba(255,238,200,0.9),transparent_45%),radial-gradient(circle_at_70%_55%,rgba(255,238,200,0.7),transparent_45%)]" />

        {/* parallax-style soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.25)_48%,rgba(255,255,255,0.05)_72%)]" />

        {/* gentle grain */}
        <div className="absolute inset-0 opacity-[0.10] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Sticker className="floaty">
              <Stars size={14} />
              {profile.name}
            </Sticker>
            <div className="text-sm text-black/65">{profile.location}</div>
          </div>

          <nav className="flex flex-wrap gap-2">
            <a
              className="rounded-2xl bg-white/85 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/10 backdrop-blur hover:bg-white"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <Github size={16} /> GitHub
              </span>
            </a>
            <a
              className="rounded-2xl bg-white/85 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/10 backdrop-blur hover:bg-white"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </span>
            </a>
            <a
              className="rounded-2xl bg-white/85 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/10 backdrop-blur hover:bg-white"
              href={`mailto:${profile.email}`}
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={16} /> Email
              </span>
            </a>
            <a
              className="rounded-2xl bg-white/85 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/10 backdrop-blur hover:bg-white"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <FileText size={16} /> Resume
              </span>
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-white/85 p-8 shadow-sm ring-1 ring-black/10 backdrop-blur">
            {/* little decorative blob */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-200/40 blur-2xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-emerald-200/50 blur-2xl" />

            <div className="flex flex-wrap items-center gap-2">
              <Sticker>
                <Sparkles size={14} />
                Ghibli-inspired aesthetic
              </Sticker>
              <Sticker className="bg-white/70">✨ calm • cozy • curious</Sticker>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-black md:text-6xl">
              {profile.headline}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-black/80">
              I build AI + data projects that are practical, human-centered, and fun to use.
              I love research, product work, and community building.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.skills.languages.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
              {profile.skills.tools.slice(0, 3).map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                See Projects
              </a>
              <a
                href="#about"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/15 hover:bg-white/90"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/15 hover:bg-white/90"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Photo card */}
          <div className="rounded-[2.25rem] bg-white/85 p-7 shadow-sm ring-1 ring-black/10 backdrop-blur">
            <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-black/10">
              <Image
                src="/me.jpeg"
                alt="Maryam"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Sticker className="floaty">🌿 always learning</Sticker>
              <Sticker className="floaty">☁️ building with care</Sticker>
            </div>
          </div>
        </section>

        {/* Stats */}
        <Divider />
        <section className="mt-2">
          <Sticker className="mb-4">📌 A few quick highlights</Sticker>
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard value="100+" label="students supported via tutoring / TA work" />
            <StatCard value="4" label="conferences attended (Grace Hopper + Great Minds in STEM x2 + GMIS)" />
            <StatCard value="3+" label="AI/data projects across NLP + computer vision + analytics" />
          </div>
        </section>

        {/* About */}
        <Divider />
        <section className="mt-2">
          <ChatCard />
        </section>
        
        <Section id="about" title="About">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white/85 p-7 shadow-sm ring-1 ring-black/10 backdrop-blur">
              {profile.bio.map((p) => (
                <p key={p} className="mb-3 text-black/80 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="mt-4 flex flex-wrap gap-2">
                <Sticker>🧠 ML + NLP</Sticker>
                <Sticker>🧩 product-minded</Sticker>
                <Sticker>🤝 community builder</Sticker>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/85 p-7 shadow-sm ring-1 ring-black/10 backdrop-blur">
              <h3 className="text-xl font-bold text-black">Education</h3>
              <div className="mt-3 text-sm text-black/75">
                <div className="font-semibold">{profile.education[0].school}</div>
                <div>{profile.education[0].degree}</div>
                <div className="mt-1 text-black/60">{profile.education[0].date}</div>
                <ul className="mt-3 list-disc pl-5">
                  {profile.education[0].highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {profile.projects.map((p) => (
              <div
                key={p.name}
                className="group rounded-[2rem] bg-white/85 p-7 shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-black">{p.name}</h3>
                <p className="mt-2 text-sm text-black/75 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
                <div className="mt-5 text-xs text-black/50">
                  (Add a “Read more” link later if you want.)
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {profile.experience.map((e) => (
              <div
                key={e.org + e.role}
                className="rounded-[2rem] bg-white/85 p-7 shadow-sm ring-1 ring-black/10 backdrop-blur"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div className="text-xl font-bold text-black">
                    {e.role} · {e.org}
                  </div>
                  <div className="text-sm text-black/60">{e.date}</div>
                </div>
                <ul className="mt-4 list-disc pl-5 text-sm text-black/75">
                  {e.bullets.map((b) => (
                    <li key={b} className="mb-1">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-[2rem] bg-white/85 p-7 shadow-sm ring-1 ring-black/10 backdrop-blur">
            <p className="text-sm text-black/75">
              The fastest way to reach me is email. I’m also active on LinkedIn and GitHub.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                href={`mailto:${profile.email}`}
              >
                Email me
              </a>
              <a
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/15 hover:bg-white/90"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/15 hover:bg-white/90"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    </main>
  );
}