export default function AppPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Your next steps</h1>
      <p className="mt-2 text-ink/70">
        Paste a brain dump below. Breakdown, checklist, timer, and progress
        arrive in step 2.
      </p>

      <div className="mt-8">
        <label
          htmlFor="braindump"
          className="mb-2 block text-sm font-medium text-ink/70"
        >
          Brain dump
        </label>
        <textarea
          id="braindump"
          rows={5}
          disabled
          placeholder="Breakdown coming soon — the AI turns this into 5–30 minute tasks."
          className="w-full resize-y rounded-2xl border border-lavender/40 bg-header/60 p-4 text-base text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none disabled:opacity-60"
        />
        <button
          type="button"
          disabled
          className="mt-4 rounded-full bg-accent px-6 py-3 text-base font-medium text-white opacity-50"
        >
          Break it down
        </button>
      </div>

      {/* Placeholder checklist shell: empty state only carries the dry wit */}
      <div className="mt-10 rounded-2xl border border-lavender/40 bg-header/40 p-8 text-center">
        <p className="text-lg text-white">Nothing here yet. Suspiciously calm.</p>
        <p className="mt-2 text-sm text-ink/60">
          Your beautifully tiny tasks will appear here once breakdown is wired
          up — each with its own timer, because time is fake but deadlines
          aren&apos;t.
        </p>
      </div>
    </div>
  );
}
