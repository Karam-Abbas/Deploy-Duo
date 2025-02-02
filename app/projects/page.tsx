import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Healthcare Management System",
    description: "Digital solution for managing patient records and appointments",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["React", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Real Estate Portal",
    description: "Property listing and management platform with virtual tours",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Vue.js", "Django", "PostgreSQL"],
    link: "#",
  },
  // Add more projects as needed
]

export default function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Projects</h1>
        <p className="max-w-[700px] text-muted-foreground">
          Explore our portfolio of successful projects and digital solutions
        </p>
      </div>
      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

