"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const team = [
  {
    name: "Karam Abbas",
    role: "CEO & Co-founder",
    image: "/karam.JPG?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/karamabbas/",
  },
  {
    name: "Abdul Hannan",
    role: "CTO & Co-founder",
    image: "/hannan.PNG?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/abdul-hannan-95a342306/",
  },
];

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries and embracing new technologies",
  },
  {
    title: "Quality",
    description: "Delivering excellence in every project",
  },
  {
    title: "Collaboration",
    description: "Working together to achieve great results",
  },
];

export default function AboutPage() {
  const router = useRouter();

  const handleCardClick = (linkedin: string) => {
    window.open(linkedin, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 mx-auto space-y-16 md:py-12 lg:py-24">
        {/* Hero Section */}
        <header className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            About Deploy Duo
          </h1>
          <p className="text-lg text-muted-foreground">
            We are a passionate team of developers and designers creating
            exceptional digital experiences
          </p>
        </header>

        {/* Our Story Section */}
        <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col space-y-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
            Founded in 2023 by two university friends, DeployDuo is a web solutions company dedicated to crafting high-performance, scalable websites. Whether you need a fully coded solution with MERN or Next.js or a no-code website powered by WordPress, we’ve got you covered. With a focus on efficiency and innovation, we help businesses turn ideas into reality—fast and flawlessly. 🚀
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/AboutUs.jpg"
              alt="About Deploy Duo"
              width={400}
              height={300}
              priority
              className="rounded-lg object-cover w-full h-auto shadow-lg"
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {team.map((member, index) => (
              <Card
                key={index}
                className="transition-transform hover:scale-105 cursor-pointer"
                onClick={() => handleCardClick(member.linkedin)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-40 h-40">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card
                key={index}
                className="transition-transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
