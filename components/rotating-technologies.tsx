"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si"
import { FaWordpress } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#FFFF00" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MS SQL", icon: DiMsqlServer, color: "#E1341E" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Wordpress", icon: FaWordpress, color: "#ffffff" },
]

export function RotatingTechnologies() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="">
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technologies We Master
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our expertise spans across modern web and software development technologies
          </p>
        </div>

        <div className="relative mt-16 pt-16 ">
          {/* Background blur effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 bg-primary/10 blur-3xl" />
          </div>
          
          <div className=" relative mx-auto flex max-w-xl items-center justify-center">
            <AnimatePresence mode="sync">
              {[-2, -1, 0, 1, 2].map((offset) => {
                const index = (currentIndex + offset + technologies.length) % technologies.length
                const tech = technologies[index]
                
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ 
                      opacity: 0,
                      x: offset > 0 ? 100 : -100,
                      scale: 0.8
                    }}
                    animate={{ 
                      opacity: offset === 0 ? 1 : 0.5,
                      x: offset * 160,
                      scale: offset === 0 ? 1 : 0.8,
                      zIndex: offset === 0 ? 10 : 0
                    }}
                    exit={{ 
                      opacity: 0,
                      x: offset < 0 ? -100 : 100,
                      scale: 0.8
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute flex flex-col items-center justify-center"
                  >
                    <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-card1 p-4 shadow-xl">
                      <tech.icon 
                        className="h-16 w-16 transition-transform duration-300 hover:scale-110"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: offset === 0 ? 1 : 0,
                        y: 0
                      }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-4 text-lg font-medium"
                    >
                      {tech.name}
                    </motion.span>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>  

          {/* Navigation dots */}
          <div className="mt-6 flex justify-center gap-2 pt-16">
          </div>
        </div>
      </div>
    </section>
  )
}