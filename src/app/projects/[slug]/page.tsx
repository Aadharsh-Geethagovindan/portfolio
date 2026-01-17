import Link from "next/link";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-12">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Software projects
        </h1>
        <p className="max-w-2xl text-zinc-600">
          Unity multiplayer systems, data-driven game content, and web apps built for real use.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Featured</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <span className="rounded-full border px-2 py-0.5 text-xs text-zinc-600">
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-zinc-600">{p.oneLiner}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">More</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <span className="rounded-full border px-2 py-0.5 text-xs text-zinc-600">
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-zinc-600">{p.oneLiner}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
