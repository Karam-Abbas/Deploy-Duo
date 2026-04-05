"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Clock, Globe, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          to_email: "karamworkmail07@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setFormData({ name: "", email: "", projectType: "", budget: "", message: "" })
    } catch (error) {
      console.error("Form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="flex items-center px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-content w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} custom={0} className="section-label mb-6">
              // Contact
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.1] tracking-tight">
              Let&apos;s Build Something
              <br />
              Together.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Tell us about your project. We&apos;ll reply within 24 hours with
              honest thoughts and a clear next step.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== FORM + INFO ===== */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-content grid gap-16 md:grid-cols-2">
          {/* Left — Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted">deployduo@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div>
                  <p className="text-sm font-medium">Response Time</p>
                  <p className="text-sm text-muted">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="h-5 w-5 mt-0.5 text-accent shrink-0" />
                <div>
                  <p className="text-sm font-medium">Availability</p>
                  <p className="text-sm text-muted">Open to new projects</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-sm italic text-muted leading-relaxed">
                &ldquo;We don&apos;t do pushy sales calls. Just a real conversation about
                whether we&apos;re a good fit.&rdquo;
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/Karam-Abbas"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/karamabbas"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="web-app">Web App</option>
                    <option value="e-commerce">E-Commerce</option>
                    <option value="wordpress">WordPress</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="<500">&lt;$500</option>
                    <option value="500-2k">$500–$2k</option>
                    <option value="2k-5k">$2k–$5k</option>
                    <option value="5k+">$5k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted/50 outline-none transition-colors focus:border-accent resize-none"
                  placeholder="What are you building? Tell us about your goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-dim disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
