export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-2xl bg-black/5 px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/5">
      {children}
    </span>
  );
}