import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="mt-14 pb-8 text-center text-xs text-black/50">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white/50 px-4 py-3 ring-1 ring-black/5 backdrop-blur">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js + Vercel + an AI assistant.
      </div>
    </footer>
  );
}