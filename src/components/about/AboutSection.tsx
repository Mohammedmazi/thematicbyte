import Container from "../shared/Container";

export default function AboutSection() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
              About Thematic Byte
            </p>

            <h2 className="mb-6 text-5xl font-bold text-white">
              Technology Built Around Business Growth
            </h2>

            <p className="text-lg text-zinc-400">
              Thematic Byte helps businesses modernize operations
              through software development, automation, artificial
              intelligence, and digital transformation solutions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="grid grid-cols-2 gap-6">

              <div>
                <h3 className="text-4xl font-bold text-white">
                  AI
                </h3>

                <p className="text-zinc-400">
                  Intelligent Automation
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  Cloud
                </h3>

                <p className="text-zinc-400">
                  Modern Infrastructure
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  Apps
                </h3>

                <p className="text-zinc-400">
                  Web & Mobile
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  Data
                </h3>

                <p className="text-zinc-400">
                  Analytics & Insights
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}