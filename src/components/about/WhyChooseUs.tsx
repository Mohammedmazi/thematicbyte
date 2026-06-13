import Container from "../shared/Container";

const features = [
  {
    title: "Custom Solutions",
    description:
      "Every solution is tailored to your business requirements and workflows.",
  },
  {
    title: "AI-Driven Innovation",
    description:
      "Leverage modern AI technologies to automate processes and increase efficiency.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built with future growth, performance, and reliability in mind.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We support, improve, and evolve your systems as your business grows.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-indigo-400">
            Why Choose Us
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Technology That Creates Real Business Value
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            We focus on delivering measurable business outcomes,
            not just software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                transition-all
                duration-300
                hover:border-indigo-500/40
                hover:bg-white/10
              "
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}