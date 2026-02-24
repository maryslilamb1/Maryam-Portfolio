export default function Sticker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-2xl bg-white/85 px-3 py-2 text-xs font-semibold text-black shadow-sm ring-1 ring-black/10 backdrop-blur " +
        className
      }
    >
      {children}
    </span>
  );
}