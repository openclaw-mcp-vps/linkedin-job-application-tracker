export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track job applications{" "}
          <span className="text-[#58a6ff]">automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          JobTrackr detects when you apply on LinkedIn, Indeed, and more — logging every application instantly and sending smart follow-up reminders so nothing slips through.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works on Chrome &amp; Edge.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to land your next role</p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $8<span className="text-2xl font-medium text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#6e7681] text-xs mb-8">Billed monthly. No contracts.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Auto-detect applications on LinkedIn & Indeed",
              "Centralized dashboard with status tracking",
              "Email follow-up reminders",
              "Export to CSV",
              "Unlimited applications"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which job boards does JobTrackr support?",
              a: "JobTrackr currently auto-detects applications on LinkedIn and Indeed. Support for Glassdoor and ZipRecruiter is coming soon."
            },
            {
              q: "How do the follow-up reminders work?",
              a: "After you apply, JobTrackr schedules email reminders at 7 and 14 days if you haven't heard back, so you never forget to follow up."
            },
            {
              q: "Is my data private and secure?",
              a: "Yes. Your application data is encrypted in transit and at rest. We never sell your data or share it with third parties."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        &copy; {new Date().getFullYear()} JobTrackr. All rights reserved.
      </footer>
    </main>
  );
}
