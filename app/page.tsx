import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LearningPaths } from "@/components/learning-paths"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <LearningPaths />
      <Footer />
    </div>
  )
}
