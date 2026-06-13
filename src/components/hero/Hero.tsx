import Container from "../shared/Container";
import NeuralBackground from "./NeuralBackground";
import DashboardMockup from "./DashboardMockup";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home"className="relative overflow-hidden ">
      <NeuralBackground />

      <Container>
        <div className="grid min-h-200 items-center gap-16 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-2xl ">
            <p className="px-4 py-2 text-sm uppercase tracking-widest text-indigo-400">
              Software • AI • Automation
            </p>

            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-300">
              Helping Businesses Build, Automate & Scale
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-[1.05] text-white md:text-6xl xl:text-7xl" >
              Transforming Businesses Through{" "}
              <span className="text-indigo-500">
                Software
              </span>
              ,{" "}
              <span className="text-cyan-400">
                AI
              </span>{" "}
              & Automation
            </h1>

            <p className="mb-8 max-w-xl text-lg text-zinc-400">
              We help businesses streamline operations,
              improve productivity, and accelerate growth
              through custom software development,
              intelligent automation, and digital
              transformation solutions.
            </p>

           
          </div>

          <div>
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
