export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          I build interactive systems and web products with a strong emphasis on clean architecture,
          maintainability, and clear user experience. My work spans Unity game systems
          (including multiplayer) and modern React / Next.js applications.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <section className="panel panel--accent">
          <h2 className="text-sm font-semibold tracking-wide text-[#0066ff] uppercase">
            Core Skills
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>Unity (C#), gameplay systems, event-driven architecture</li>
            <li>Multiplayer systems using Mirror (state sync, turn flow, UI feedback)</li>
            <li>React / Next.js, component-driven architecture, content-based pages</li>
            <li>Supabase authentication and content storage for admin-managed sites</li>
          </ul>
        </section>

        <section className="panel panel--accentr">
          <h2 className="text-sm font-semibold tracking-wide text-[#0066ff] uppercase">
            Certifications
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>CompTIA Security+</li>
            <li>CompTIA A+</li>
            <li>Cisco IT Essentials</li>
          </ul>
        </section>
      </section>

      <section className="panel panel--accent panel--accentr">
        <h2 className="text-sm font-semibold tracking-wide text-[#a1a1aa] uppercase">
          What I Focus On
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-zinc-400 leading-relaxed">
          I gravitate toward problems that benefit from strong structural decisions early on:
          systems that need to scale in complexity without becoming fragile. I enjoy working at the
          intersection of technical depth and user-facing clarity, whether that’s designing a
          multiplayer game loop or building a site that non-technical users can confidently maintain.
        </p>
      </section>
    </div>
  );
}
