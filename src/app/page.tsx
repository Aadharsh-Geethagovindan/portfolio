import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";
import AutoGallery from "@/components/AutoGallery";


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
        <AutoGallery projects={projects} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Featured</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="card"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <span className="badge badge--progress">
                    {p.status}
                  </span>
                </div>
                {p.coverImage && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-zinc-800">
                    
                  </div>
                )}
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
              className="card"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <span className="badge badge--progress">
                    {p.status}
                  </span>
                </div>
                {p.coverImage && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-zinc-800">
                    
                  </div>
                )}
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
