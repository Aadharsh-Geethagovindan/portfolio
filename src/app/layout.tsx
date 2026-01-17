import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Aadharsh G — Portfolio",
  description: "Software projects: Unity, web, multiplayer, and data-driven systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="border-b">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Aadharsh G
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:underline underline-offset-4">Projects</Link>
              <Link href="/about" className="hover:underline underline-offset-4">About</Link>
              <a
                href="/resume.pdf"
                className="hover:underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>

        <footer className="border-t">
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
