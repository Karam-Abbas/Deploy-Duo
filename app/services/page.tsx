"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

const services = [
  {
    num: "01",
    title: "Custom Web Development",
    body: "Full-stack websites built with React or Next.js. Optimized for performance, SEO, and long-term maintainability.",
  },
  {
    num: "02",
    title: "WordPress Development",
    body: "Headless or classic WordPress builds. Great for content-heavy sites, blogs, or clients who need to manage their own content.",
  },
  {
    num: "03",
    title: "E-Commerce Development",
    body: "Shopify, WooCommerce, or custom storefronts. Integrated with payments, inventory, and analytics from day one.",
  },
  {
    num: "04",
    title: "Full-Stack Web Apps",
    body: "Complex applications with databases, auth, and real-time features. Built on MERN or Next.js + Supabase.",
  },
  {
    num: "05",
    title: "UI/UX & Frontend Design",
    body: "Pixel-perfect interfaces that look good and feel even better. We care about how things work, not just how they look.",
  },
  {
    num: "06",
    title: "Maintenance & Support",
    body: "Ongoing updates, bug fixes, and performance monitoring. So you can focus on your business, not your bugs.",
  },
]

const techCategories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    label: "CMS / No-Code",
    techs: ["WordPress", "WooCommerce"],
  },
  {
    label: "Tooling",
    techs: ["Git", "Vercel", "Figma", "Web3 Forms"],
  },
]

const differentiators = [
  {
    title: "Speed",
    body: "We move fast without cutting corners. Focused sprints mean you see progress every week, not every month.",
  },
  {
    title: "Quality",
    body: "No templates, no copy-paste. Every line of code is written for your project — clean, tested, and maintainable.",
  },
  {
    title: "Communication",
    body: "You'll always know where things stand. Regular updates, honest timelines, and no surprises.",
  },
]

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="flex items-center px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-content w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="section-label mb-6">
              // Services
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.1] tracking-tight">
              Everything You Need.
              <br />
              Nothing You Don&apos;t.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              We offer focused, high-quality development services — no bloated
              agency overhead, just experienced engineers who ship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 md:grid-cols-2">
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
                <span className="font-mono text-2xl text-muted/30">{svc.num}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{svc.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{svc.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="px-6 py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-heading">Our Tech Stack</h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {cat.label}
                </span>
                <div className="mt-4 space-y-3">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech}
                      className="rounded-lg border border-border bg-bg px-4 py-3 text-sm font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-heading max-w-lg">Why Deploy Duo?</h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {differentiators.map((diff, i) => (
              <motion.div
                key={diff.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <h3 className="font-display text-2xl font-bold text-accent">{diff.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{diff.body}</p>
              </motion.div>
            ))}
          </div>
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
            Have Something in Mind?
          </h2>
          <p className="mt-4 text-lg text-muted">Let&apos;s talk.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-dim"
          >
            Get in Touch &rarr;
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
