"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

const projects = [
  {
    title: "Beemo Shop",
    description: "Fully functional jewellery store with payments & inventory",
    image: "/beemo.png",
    tech: ["WordPress"],
    link: "https://beemo.shop",
    category: "E-Commerce",
    highlight: null,
  },
  {
    title: "Mushtaq & Sons",
    description: "A Tag & Label Company's Portfolio",
    image: "/mushtaq.png",
    tech: ["React", "JavaScript", "Web3 Forms"],
    link: "https://mushtaqsons.com.pk",
    category: "Portfolio",
    highlight: null,
  },
  {
    title: "Dubai Repair Service",
    description: "Professional repair company portfolio with booking system",
    image: "/dubairepair.png",
    tech: ["React", "Web3 Forms", "JavaScript"],
    link: "https://serviceapp1.vercel.app",
    category: "Portfolio",
    highlight: null,
  },
  {
    title: "Nike App",
    description: "Re-imagined Nike portfolio with modern UI",
    image: "/nikeapp.png",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://nike-ui-seven.vercel.app",
    category: "Portfolio",
    highlight: null,
  },
  {
    title: "Finance Tracker",
    description: "Full-stack finance management web application",
    image: "/Group 3.png",
    tech: ["React", "Express", "Node", "MongoDB"],
    link: "https://financetrackerwebapp.vercel.app/",
    github: "https://github.com/Karam-Abbas/Finance-Tracker",
    category: "Finance",
    highlight: null,
  },
  {
    title: "Medcurric",
    description: "Blog platform for medical students and practitioners",
    image: "/medcurric.jpeg",
    tech: ["WordPress"],
    link: "https://medcurricinsights.com",
    category: "Blog",
    highlight: null,
  },
]

const categories = ["All", ...new Set(projects.map((p) => p.category))]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  )

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="flex items-center px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-content w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="section-label mb-6">
              // Our Work
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.1] tracking-tight">
              Projects That
              <br />
              Prove It.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              We let the work speak. Here&apos;s what we&apos;ve built for clients across
              e-commerce, finance, healthcare, and more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== FILTER + GRID ===== */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-content">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-bg"
                    : "border border-border text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="group flex flex-col rounded-xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent h-full">
                  <div className="relative h-52 w-full shrink-0 overflow-hidden bg-surface">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted">{project.description}</p>

                    {project.highlight && (
                      <p className="mt-3 text-xs text-accent/80 italic">
                        &ldquo;{project.highlight}&rdquo;
                      </p>
                    )}

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

                    <div className="mt-auto pt-5 flex items-center gap-4">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors"
                        >
                          GitHub <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      )}
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-text hover:text-accent transition-colors"
                      >
                        View Live <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="px-6 py-24 md:py-32 bg-surface border-y border-border">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-content text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Want to Be on This List?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-dim"
          >
            Start a Project &rarr;
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
