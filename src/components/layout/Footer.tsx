import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-bold text-white">
            Thematic Byte Ltd
          </h3>

          <p className="text-zinc-400">
            Software Development • AI Solutions •
            Digital Transformation
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            © 2026 Thematic Byte Ltd. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}