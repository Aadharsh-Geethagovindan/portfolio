export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="max-w-2xl text-zinc-400">
          I’m open to full-time roles, contract work, and technical discussions.
        </p>
      </header>

      <section className="panel panel--accent max-w-xl">
        <ul className="space-y-4 text-sm">
          <li>
            <span className="block text-zinc-400">Email</span>
            <a className="link" href="mailto:your.email@example.com">
              aadharshgg23@gmail.com
            </a>
          </li>

          <li>
            <span className="block text-zinc-400">GitHub</span>
            <a
              className="link"
              href="https://github.com/Aadharsh-Geethagovindan"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Aadharsh-Geethagovindan
            </a>
          </li>

          <li>
            <span className="block text-zinc-400">LinkedIn</span>
            <a
              className="link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/aadharsh-g/
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
