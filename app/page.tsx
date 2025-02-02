import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RotatingTechnologies } from "@/components/rotating-technologies"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col scrollbar-hide">
      {/* Hero Section */}
      <section className=" flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-[64rem]">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Building Digital Excellence with{" "}
              <span className="text-primary">Deploy Duo</span>
            </h1>
            <p className="mx-auto max-w-[42rem] text-lg text-muted-foreground sm:text-xl sm:leading-8">
              We transform ideas into powerful digital solutions. Expertise in web
              development, mobile apps, and custom software solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full bg-muted/50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <RotatingTechnologies/>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-[42rem] text-lg text-muted-foreground sm:text-xl sm:leading-8">
              Let's discuss how we can help bring your ideas to life
            </p>
            <Button size="lg" asChild className="mt-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}