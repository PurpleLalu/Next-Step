export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold text-white">Sign in</h1>
      <p className="mt-2 text-ink/70">
        Magic-link sign-in arrives in a later step.
      </p>

      <form className="mt-8" action="#">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-ink/70"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          disabled
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-lavender/40 bg-header/60 p-4 text-base text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled
          className="mt-4 w-full rounded-full bg-accent px-6 py-3 text-base font-medium text-white opacity-50"
        >
          Email me a sign-in link
        </button>
      </form>
    </div>
  );
}
