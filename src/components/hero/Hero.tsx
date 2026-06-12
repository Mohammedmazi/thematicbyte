"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import NeuralBackground from "./NeuralBackground";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NeuralBackground />

      <Container>
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2">
          
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm uppercase tracking-widest text-indigo-400"
            >
              Software • AI • Automation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl"
            >
              Transforming Businesses Through{" "}
              <span className="text-indigo-500">
                Software
              </span>
              ,{" "}
              <span className="text-cyan-400">
                AI
              </span>{" "}
              & Automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mb-8 max-w-xl text-lg text-zinc-400"
            >
              We help businesses streamline operations,
              improve productivity, and accelerate growth
              through custom software development,
              intelligent automation, and digital
              transformation solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <button className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">
                Start Your Project
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                Explore Services
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}