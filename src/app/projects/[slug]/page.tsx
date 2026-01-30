import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject } from "@/data/projects";
import ProjectMDX from "@/components/ProjectMDX";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: {
      title: project.title,
      description: project.oneLiner,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) return notFound();
  const images = (project.galleryImages?.length ? project.galleryImages : [project.coverImage]).filter(Boolean);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0066ff]">{project.title}</h1>
          <span className="badge badge--progress">
            {project.status}
          </span>
        </div>

        <p className="max-w-2xl text-zinc-600">{project.oneLiner}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((s) => (
            <span
              key={s}
              className="chip"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          {project.links.live && (
            <a className="rounded-lg border px-3 py-2 hover:bg-zinc-50" href={project.links.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.links.github && (
            <a className="rounded-lg border px-3 py-2 hover:bg-zinc-50" href={project.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.links.video && (
            <a className="rounded-lg border px-3 py-2 hover:bg-zinc-50" href={project.links.video} target="_blank" rel="noreferrer">
              Demo video
            </a>
          )}
          <Link className="rounded-lg border px-3 py-2 hover:bg-zinc-50" href="/">
            Back
          </Link>
        </div>
      </header>

      <section className="panel panel--accent">
        <h2 className="text-sm font-semibold text-[#0066ff]">Highlights</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
     
      {project.links.video && (
      <section className="panel panel--accent">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">
            Demo
          </h2>
          <div className="text-xs text-zinc-500">Muted autoplay</div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/30">
          <video
            className="w-full h-auto max-h-[70vh] mx-auto"
            src={project.links.video}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </section>
    )}
      <section className="content-spine">
      <div className="prose prose-zinc max-w-3xl leading-relaxed">
        <ProjectMDX file={`${project.slug}.top`} />
      </div>
    </section>

    {images.length > 0 && (
      <section className="panel panel--accent">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">
            Screenshots
          </h2>
          <div className="text-xs text-zinc-500">{images.length > 1 ? "Use arrows" : " "}</div>
        </div>
        <ImageCarousel images={images} title={project.title} />
      </section>
    )}

    <section className="content-spine">
      <div className="prose prose-zinc max-w-3xl leading-relaxed">
        <ProjectMDX file={`${project.slug}.bottom`} />
      </div>
    </section>
    </article>
  );
}
