import Container from "../shared/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, challenges, and growth opportunities.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create solution architecture, user flows, and implementation plans.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build scalable software, automation, and AI solutions.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Launch securely with monitoring, testing, and optimization.",
  },
];

export default function Process() {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-indigo-400">
            Our Process
          </p>

          <h2 className="text-5xl font-bold text-white">
            How We Work
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-6 text-5xl font-bold text-indigo-500/40">
                {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}