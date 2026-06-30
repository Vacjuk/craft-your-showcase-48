import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand/5 bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Ready to build?</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          We take on a handful of projects each quarter. If your brand deserves
          better than a template, let's talk.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Email
            </p>
            <a
              href="mailto:hello@vantage.studio"
              className="border-b border-brand pb-1 text-lg font-bold"
            >
              hello@vantage.studio
            </a>
          </div>
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Studio
            </p>
            <p className="text-sm">
              42 Hawley Street
              <br />
              Brooklyn, NY 11211
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Follow
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm font-bold hover:text-accent">Twitter</a>
              <a href="#" className="text-sm font-bold hover:text-accent">Dribbble</a>
              <a href="#" className="text-sm font-bold hover:text-accent">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-brand/5 pt-8 text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vantage Design Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
