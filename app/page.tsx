"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Sparkles, Code2, Filter } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const techs = [
  "React",
  "Next.js",
  "Node.js",
  "WordPress",
  "MongoDB",
  "AWS",
  "Supabase",
  "Express",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "Git",
  "Django",
];

const services = [
  {
    num: "01",
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI Automation",
    body: "Automate repetitive tasks and workflows using AI-powered solutions. From chatbots to predictive analytics, we help you leverage AI to save time and improve efficiency.",
  },
  {
    num: "02",
    icon: <Code2 className="h-6 w-6" />,
    title: "Web Development",
    body: "Custom websites and web apps built for speed, scale, and conversion. React, Next.js, or WordPress — whatever fits the job.",
  },
  {
    num: "03",
    icon: <Filter className="h-6 w-6" />,
    title: "Data Scraping",
    body: "Database-backed applications with clean APIs and intuitive UIs. MERN stack, auth, dashboards — we own the full picture.",
  },
];

const featuredProjects = [
  {
    title: "Beemo Shop",
    description: "Fully functional jewellery store with payments & inventory",
    image: "/beemo.png",
    tech: ["WordPress"],
    category: "E-Commerce",
    link: "https://beemo.shop",
  },
  {
    title: "Dubai Repair Service",
    description: "Professional repair company portfolio with booking system",
    image: "/dubairepair.png",
    tech: ["React", "Web3 Forms"],
    category: "Portfolio",
    link: "https://serviceapp1.vercel.app",
  },
  {
    title: "Finance Tracker",
    description: "Full-stack finance management web application",
    image: "/Group 3.png",
    tech: ["React", "Express", "MongoDB"],
    category: "Finance",
    link: "https://financetrackerwebapp.vercel.app/",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    body: "We learn your goals, users, and constraints in a focused kickoff call.",
  },
  {
    num: "02",
    title: "Design",
    body: "Wireframes and visual mockups — you see it before we build it.",
  },
  {
    num: "03",
    title: "Build",
    body: "Agile sprints with regular check-ins. You always know where things stand.",
  },
  {
    num: "04",
    title: "Launch",
    body: "Deployment, testing, and handoff. Plus post-launch support.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center px-6 pt-16">
        {/* Dot grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #EDEDED 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-content w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="section-label mb-6"
            >
              // Software Agency &middot; Est. 2023
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-[clamp(52px,8vw,96px)] font-extrabold leading-[1.05] tracking-tight"
            >
              We Build Software
              <br />
              <span className="text-accent">That Ships.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-xl text-lg text-muted leading-relaxed"
            >
              From idea to production, Deploy Duo turns complex problems into
              clean, scalable digital products — web apps, e-commerce, and
              everything in between.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-dim"
              >
                Start a Project &rarr;
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-border px-7 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TECH TICKER ===== */}
      <div className="border-y border-border py-5 overflow-hidden bg-surface">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...techs, ...techs].map((t, i) => (
            <span
              key={i}
              className="font-mono text-sm text-muted uppercase tracking-wider"
            >
              {t} <span className="text-accent mx-2">&middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== STATS BAR ===== */}
      <section className="border-b border-border bg-surface py-16 px-6">
        <div className="mx-auto max-w-content grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Projects Built" },
            { value: "100%", label: "On-time Delivery" },
            { value: "2 yrs", label: "Of Experience" },
            { value: "3", label: "Countries Served" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center md:border-r md:border-border last:border-0"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-text">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES SNAPSHOT ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-label">01 — What We Do</p>
            <h2 className="section-heading max-w-xl">
              End-to-End Digital Delivery
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((svc, i) => (
              <motion.div
                key={svc.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group rounded-xl border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <span className="font-mono text-3xl text-muted/30">
                  {svc.num}
                </span>
                <div className="mt-6 mb-4 font-mono text-xl text-accent">
                  {svc.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{svc.body}</p>
                <Link
                  href="/services"
                  className="mt-6 inline-block text-sm text-muted hover:text-accent transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-dim"
            >
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="px-6 py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-label">02 — Our Work</p>
            <h2 className="section-heading max-w-xl">
              Products We&apos;re Proud Of
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-bg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-xs font-mono text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              View All Projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-label">03 — How We Work</p>
            <h2 className="section-heading max-w-xl">
              Simple Process. No Surprises.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-[calc(50%+24px)] right-0 h-px border-t border-dashed border-border" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent text-accent font-mono text-xs font-bold">
                    {step.num}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative px-6 py-24 md:py-32 bg-surface border-y border-border overflow-hidden">
        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-content text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Ready to Build Something <span className="text-accent">Real?</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-dim"
            >
              Start a Project &rarr;
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
