import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Aadharsh G — Portfolio",
    template: "%s — Aadharsh G",
  },
  description:
    "Unity multiplayer systems, data-driven game content, and production-ready web apps.",
  openGraph: {
    type: "website",
    siteName: "Aadharsh G",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <header className="border-b border-zinc-800">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="brand">
              Aadharsh G
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="link">Projects</Link>
              <Link href="/about" className="link">About</Link>
              <Link href="/contact" className="link">Contact</Link>
              <a
                href="/resume.pdf"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10 bg-transparent">{children}</main>

        <footer className="border-t border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-600">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span>© {new Date().getFullYear()} Aadharsh G</span>
              <div className="flex gap-4">
                <a className="hover:underline underline-offset-4" href="https://github.com/Aadharsh-Geethagovindan" target="_blank" rel="noreferrer">GitHub</a>
                <a className="hover:underline underline-offset-4" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
