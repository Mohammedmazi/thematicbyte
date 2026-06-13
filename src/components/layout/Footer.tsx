import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Thematic Byte
            </h3>

            <p className="text-zinc-400">
              Software Development, AI Solutions,
              and Digital Transformation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Services
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Solutions</li>
              <li>Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Company
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Technologies
            </h4>

            <ul className="space-y-2 text-zinc-400">
              <li>Next.js</li>
              <li>Python</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-zinc-500">
          © 2026 Thematic Byte Ltd. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}