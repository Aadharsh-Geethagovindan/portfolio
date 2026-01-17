export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="max-w-2xl text-zinc-600">
          I build interactive systems and web products with a focus on clean architecture, maintainability, and clear UX.
          My work spans Unity game systems (including multiplayer) and React/Next.js applications.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-zinc-700">Core skills</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>Unity (C#), gameplay systems, event-driven architecture</li>
            <li>Multiplayer (Mirror), synchronized state and UI feedback</li>
            <li>React / Next.js, component architecture, content-driven pages</li>
            <li>Supabase auth + content storage for admin-editable sites</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-zinc-700">Certifications</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>CompTIA Security+</li>
            <li>CompTIA A+</li>
            <li>Cisco IT Essentials</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
