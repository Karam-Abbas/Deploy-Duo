"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Beemo Shop",
    description: "Fully Featured E-Commerce Jewellery Store",
    image: "/beemo.png",
    tech: ["WordPress"],
    link: "https://beemo.shop",
    category: "E-Commerce Store",
  },
  {
    title: "Mushtaq & Sons",
    description: "A Tag & Label Company's Portfolio",
    image: "/mushtaq.png",
    tech: ["React", "Javascript", "HTML", "CSS", "Web3 Forms"],
    link: "https://mushtaqsons.com.pk",
    category: "Portfolio",
  },
  {
    title: "Dubai Repair Service",
    description: "Portfolio of a Repair Company ",
    image: "/dubairepair.png",
    tech: ["React", "Web3 Forms", "Javascript", "HTML", "CSS"],
    link: "https://serviceapp1.vercel.app",
    category: "Portfolio",
  },
  {
    title: "Nike App",
    description: "Re-Imagined Nike Portfolio",
    image: "/nikeapp.png",
    tech: ["React", "Javascript", "HTML", "CSS"],
    link: "https://nike-ui-seven.vercel.app",
    category: "Portfolio",
  },
  {
    title: "Finance Tracker",
    description: "A web app to handle your finances.",
    image: "/Group 3.png",
    tech: ["React", "Express", "Node", "MongoDB"],
    link: "https://financetrackerwebapp.vercel.app/", // to be changed later
    github: "https://github.com/Karam-Abbas/Finance-Tracker",
    category: "Finance",
  },
  {
    title: "Medcurric",
    description: "Blog post site for medical students and practitioners",
    image: "/medcurric.jpeg",
    tech: ["Wordpress"],
    link: "https://medcurricinsights.com",
    category: "Blog",
  }  
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background px-4 py-16 md:py-24 lg:py-32">
      <div className="">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Major Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our portfolio of successful projects and digital solutions
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          layout
        >
          {filteredProjects.map((project, index) => (
            // ...existing code...

            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="group relative h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill // Replace layout="fill" with fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes for optimization
                      priority={index < 3} // Prioritize loading first 3 images
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <span className="text-sm text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                      <motion.div
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          scale: hoveredIndex === index ? 1 : 0.8,
                        }}
                        className="flex gap-2"
                      >
                        {project.github && <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                          <Github className="h-5 w-5" />
                        </Link>}
                        {project.link &&<Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </Link>}
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>

            // ...existing code...
          ))}
        </motion.div>
      </div>
    </div>
  );
}
