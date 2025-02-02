import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-2 md:py-0">
        <div className="flex flex-col items-center justify-between space-y-6 md:h-24 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Built with ❤️ by Deploy Duo. The source code is available on{" "}
              <Link 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                GitHub
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <Link 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}