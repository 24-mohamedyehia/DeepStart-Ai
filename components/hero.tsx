"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToRoadmaps = () => {
    document.getElementById("roadmaps")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">Deep Start AI</h1>
        <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
          Start your journey into the world of AI with a clear and organized roadmap
        </p>
        <div className="mb-12">
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're a complete beginner or looking to advance your AI skills, our comprehensive roadmaps will
            guide you through every step of your learning journey.
          </p>
        </div>
        <Button
          onClick={scrollToRoadmaps}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Roadmaps
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
