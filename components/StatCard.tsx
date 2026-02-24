export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-black/10 backdrop-blur">
      <div className="text-4xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-black/70">{label}</div>
    </div>
  );
}