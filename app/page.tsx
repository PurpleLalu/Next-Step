import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="py-8">
      <p
        className="text-center text-5xl text-white"
        style={{ fontFamily: "var(--font-wordmark)" }}
      >
        NextStep
      </p>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink/80">
        Dump the swirling mess in your head. Get back a short list of small
        steps you can actually start.
      </p>

      {/* Hero brain-dump box: the one primary action on this screen (step 2 wires it up) */}
      <form className="mx-auto mt-10 max-w-xl" action="/app">
        <label
          htmlFor="braindump-hero"
          className="mb-2 block text-sm font-medium text-ink/70"
        >
          Brain dump
        </label>
        <textarea
          id="braindump-hero"
          name="dump"
          rows={5}
          placeholder="Everything on your mind — deadlines, errands, that email you've been avoiding…"
          className="w-full resize-y rounded-2xl border border-lavender/40 bg-header/60 p-4 text-base text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-accent px-6 py-3 text-base font-medium text-white hover:opacity-90"
        >
          Break it down
        </button>
      </form>

      <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-sm text-ink/60">
        <span>Already have lists piling up?</span>
        <Link href="/dashboard" className="text-teal hover:underline">
          See your history
        </Link>
      </div>
    </div>
  );
}
