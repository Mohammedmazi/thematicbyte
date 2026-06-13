import Container from "../shared/Container";
import AIAssistantPreview from "../projects/previews/AIAssistantPreview";
import AnalyticsPreview from "../projects/previews/AnalyticsPreview";
import InventoryPreview from "../projects/previews/InventoryPreview";
import PortalPreview from "../projects/previews/PortalPreview";

const projects = [
  {
    title: "AI Business Assistant",
    category: "Artificial Intelligence",
    description:
      "An intelligent assistant trained on company knowledge and documents.",
    preview: <AIAssistantPreview />,
  },
  {
    title: "Inventory Management System",
    category: "Business Software",
    description:
      "A centralized platform for stock, suppliers, and operations.",
    preview: <InventoryPreview />,
  },
  {
    title: "Analytics Dashboard",
    category: "Business Intelligence",
    description:
      "Real-time insights into performance and operational metrics.",
    preview: <AnalyticsPreview />,
  },
  {
    title: "Customer Portal",
    category: "Web Application",
    description:
      "A secure self-service platform for customers and partners.",
    preview: <PortalPreview />,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Solutions We Can Build
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            Examples of the modern software and AI solutions
            we help businesses create.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                overflow-hidden
                transition-all
                duration-300
                hover:border-cyan-500/40
              "
            >
              {project.preview}

              <div className="p-8">
                <p className="mb-3 text-sm text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}