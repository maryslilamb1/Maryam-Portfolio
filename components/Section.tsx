export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <a href="#top" className="text-sm text-black/50 hover:text-black/70">
          ↑
        </a>
      </div>
      {children}
    </section>
  );
}