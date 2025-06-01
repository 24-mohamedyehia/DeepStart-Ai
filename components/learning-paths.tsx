import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calculator, Code, Brain, Zap, Settings, MessageSquare, Eye } from "lucide-react"

const learningPaths = [
  {
    id: "mathematics-for-ai",
    title: "Mathematics For AI",
    description: "Master the mathematical foundations essential for understanding AI algorithms",
    icon: Calculator,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 hover:bg-purple-100",
  },
  {
    id: "python-for-ai",
    title: "Programming with Python for AI",
    description: "Learn Python programming specifically tailored for AI development",
    icon: Code,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50 hover:bg-green-100",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Dive into the core concepts and algorithms of machine learning",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 hover:bg-blue-100",
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "Explore neural networks and advanced deep learning techniques",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 hover:bg-orange-100",
  },
  {
    id: "software-engineering-for-ai",
    title: "Software Engineering Skills for AI",
    description: "Build robust, scalable AI systems with proper engineering practices",
    icon: Settings,
    color: "from-gray-500 to-slate-500",
    bgColor: "bg-gray-50 hover:bg-gray-100",
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing (NLP)",
    description: "Master the art of making machines understand human language",
    icon: MessageSquare,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 hover:bg-indigo-100",
  },
  {
    id: "computer-vision",
    title: "Computer Vision (CV)",
    description: "Teach machines to see and interpret visual information",
    icon: Eye,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50 hover:bg-emerald-100",
  },
]

export function LearningPaths() {
  return (
    <section id="roadmaps" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Choose Your Learning Path</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select a roadmap that matches your interests and current skill level. Each path is carefully designed to
            take you from basics to advanced concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path) => {
            const IconComponent = path.icon
            return (
              <Link key={path.id} href={`/roadmap/${path.id}`}>
                <Card
                  className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border-0 ${path.bgColor}`}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-800 leading-tight">{path.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{path.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
