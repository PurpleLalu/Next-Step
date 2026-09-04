import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextStep — Turn a brain dump into your next small step",
  description:
    "Paste a messy brain dump and get back a short checklist of small next actions you can actually start on.",
};

function Wordmark() {
  return (
    <Link
      href="/"
      className="font-wordmark text-2xl tracking-tight text-white"
      style={{ fontFamily: "var(--font-wordmark)" }}
    >
      NextStep
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Inter:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-deep-space text-ink antialiased">
        <header className="bg-header">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Wordmark />
            <nav className="flex items-center gap-5 text-sm">
              <Link href="/app" className="text-ink/80 hover:text-white">
                Start
              </Link>
              <Link href="/dashboard" className="text-ink/80 hover:text-white">
                History
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-accent px-4 py-1.5 font-medium text-white hover:opacity-90"
              >
                Sign in
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl px-6 py-12">{children}</main>
        <footer className="mx-auto max-w-3xl px-6 pb-10 text-sm text-ink/50">
          NextStep — one small step at a time.
        </footer>
      </body>
    </html>
  );
}
