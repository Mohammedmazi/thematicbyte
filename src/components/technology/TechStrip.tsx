import Container from "../shared/Container";

const technologies = [
  "Python",
  "FastAPI",
  "Next.js",
  "React",
  "Docker",
  "AWS",
  "PostgreSQL",
  "TypeScript",
];

export default function TechStrip() {
  return (
    <section className="border-y border-white/10 py-10">
      <Container>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                text-sm
                text-zinc-300
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}