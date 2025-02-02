import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const team = [
  {
    name: "John Doe",
    role: "CEO & Co-founder",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Jane Smith",
    role: "CTO & Co-founder",
    image: "/placeholder.svg?height=400&width=400",
  },
  // Add more team members as needed
]

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Deploy Duo</h1>
        <p className="max-w-[700px] text-muted-foreground">
          We are a passionate team of developers and designers creating exceptional digital experiences
        </p>
      </div>

      <div className="grid gap-12 pt-12">
        <section className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2023, Deploy Duo emerged from a shared vision to create impactful digital solutions. We combine
              technical expertise with creative innovation to deliver exceptional results for our clients.
            </p>
          </div>
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="About Deploy Duo"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-center text-muted-foreground">Pushing boundaries and embracing new technologies</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-center text-muted-foreground">Delivering excellence in every project</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-center text-muted-foreground">Working together to achieve great results</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

