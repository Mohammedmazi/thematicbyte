import Container from "../shared/Container";

const solutions = [
  {
    title: "AI Assistants",
    description:
      "Intelligent assistants that automate support, documentation, and business workflows.",
  },
  {
    title: "Customer Portals",
    description:
      "Secure self-service platforms for customers, partners, and internal teams.",
  },
  {
    title: "Analytics Dashboards",
    description:
      "Real-time business insights with custom reporting and KPI tracking.",
  },
  {
    title: "Inventory Systems",
    description:
      "Track stock, orders, and operations through centralized management systems.",
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks and streamline business processes.",
  },
  {
    title: "Mobile Applications",
    description:
      "Modern Android and iOS experiences built for growth and scalability.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions"className="py-32">
      <Container>
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
            Digital Solutions
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Built For Modern Businesses
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            We design and develop solutions that improve
            productivity, automate operations, and help
            organizations scale efficiently.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-500/40
                hover:bg-white/10
              "
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {solution.title}
              </h3>

              <p className="text-zinc-400">
                {solution.description}
              </p>

              <div className="mt-6 text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}