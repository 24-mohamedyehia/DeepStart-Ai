import { Brain, Github, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Deep Start AI</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering the next generation of AI practitioners with comprehensive, structured learning roadmaps.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#roadmaps" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2024 Deep Start AI. Made with ❤️ for the AI community.</p>
        </div>
      </div>
    </footer>
  )
}
