"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const team = [
  {
    name: "Karam Abbas",
    role: "CEO & Co-Founder",
    image: "/karam.JPG",
    bio: "I obsess over clean code and even cleaner interfaces.",
    linkedin: "https://www.linkedin.com/in/karamabbas/",
  },
  {
    name: "Abdul Hannan",
    role: "CTO & Co-Founder",
    image: "/hannan.PNG",
    bio: "If it can be optimized, it should be.",
    linkedin: "https://www.linkedin.com/in/abdul-hannan-95a342306/",
  },
];

const values = [
  {
    title: "Speed without Sacrifice",
    body: "Fast delivery doesn't mean cutting corners. It means staying focused.",
  },
  {
    title: "Client Transparency",
    body: "You know what we're building, when, and why. Always.",
  },
  {
    title: "Technical Depth",
    body: "We don't just plug in templates. We engineer solutions that scale.",
  },
  {
    title: "Long-term Thinking",
    body: "We build as if we'll be maintaining it for the next 5 years.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="flex items-center px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-content w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="section-label mb-6"
            >
              // About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.1] tracking-tight"
            >
              Two Builders.
              <br />
              One Standard.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-muted leading-relaxed max-w-2xl"
            >
              Deploy Duo was born out of a simple realization: the world has
              enough developers, but it’s starving for problem solvers. We
              started this journey because we saw too many founders getting lost
              in technical debt and 'good enough' software
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="px-6 py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="section-label">Our Story</p>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  We&apos;ve spent our careers obsessed with the architecture
                  behind the interface. From navigating the complexities of
                  healthcare data to scaling full-stack platforms, we&apos;ve
                  learned that the best digital products are built on a
                  foundation of intention and precision.
                </p>
                <p>
                  Today, we operate as a lean, high-output team. We don&apos;t
                  treat your project as another ticket in a queue; we treat it
                  as a partnership.
                </p>
                <p>
                  When you work with us, you&apos;re not just getting a
                  vendor—you&apos;re getting a team that treats your codebase as
                  if it were our own.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="/AboutUs.jpg"
                alt="Deploy Duo team"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-label">The Team</p>
            <h2 className="section-heading">Who&apos;s Behind the Keyboard</h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group rounded-xl border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <div className="flex items-start gap-6">
                  <div className="relative h-24 w-24 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="font-mono text-sm text-accent mt-1">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm text-muted italic leading-relaxed">
                      &ldquo;{member.bio}&rdquo;
                    </p>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="px-6 py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-label">What We Stand For</p>
            <h2 className="section-heading">Our Values</h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-xl border border-border p-8 transition-all duration-300 hover:border-accent"
              >
                <span className="font-mono text-xs text-muted/40">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-6 py-24 md:py-32 border-y border-border">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-content text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Work with a Team That Truely Cares.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-dim"
          >
            Get in Touch &rarr;
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
