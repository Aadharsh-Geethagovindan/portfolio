export default function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-xl border border-zinc-700 bg-zinc-900/40 p-4">
      <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-400">
        {title}
      </div>
      <div className="text-sm text-zinc-200">{children}</div>
    </div>
  );
}
