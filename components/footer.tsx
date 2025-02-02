import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className=" px-4 md:py-0">
        <div className="flex flex-col items-center justify-between space-y-6 md:h-24 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Built with 🤍 by Deploy Duo.
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
              href="https://github.com/Karam-Abbas" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="www.linkedin.com/in/karamabbas" 
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