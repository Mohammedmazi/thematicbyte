import Container from "../shared/Container";

export default function FlagshipSolution() {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
            Featured Solution
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            AI Business Assistant Platform
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            A custom AI-powered assistant trained on your company&apos;s
            knowledge, documents, workflows, and business processes.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <h3 className="mb-6 text-4xl font-bold text-white">
              Turn Company Knowledge Into Business Intelligence
            </h3>

            <p className="mb-8 text-lg text-zinc-400">
              Empower employees, automate repetitive tasks, and
              provide instant answers using AI systems customized
              specifically for your organization.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-zinc-300">
                  Knowledge Base Search
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-zinc-300">
                  Document Intelligence
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-zinc-300">
                  Workflow Automation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-zinc-300">
                  Business Analytics
                </span>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-6 flex items-center justify-between">
              <h4 className="font-semibold text-white">
                AI Assistant
              </h4>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm text-zinc-400">
                  Online
                </span>
              </div>
            </div>

            <div className="space-y-4">

              <div className="ml-auto max-w-[75%] rounded-2xl bg-indigo-500/20 p-4 text-sm text-white">
                Show me last month&apos;s sales performance.
              </div>

              <div className="max-w-[90%] rounded-2xl bg-white/10 p-4 text-sm text-zinc-300">
                Revenue increased 18% compared to the previous month.
                The strongest growth came from subscription renewals.
              </div>

              <div className="max-w-[80%] rounded-2xl bg-white/10 p-4 text-sm text-zinc-300">
                Would you like a detailed breakdown by product category?
              </div>

            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs text-zinc-400">
                  Queries
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  1.2K
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs text-zinc-400">
                  Accuracy
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  96%
                </p>
              </div>

              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs text-zinc-400">
                  Time Saved
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  37h
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}