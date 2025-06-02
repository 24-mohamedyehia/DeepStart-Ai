import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";
import { RoadmapFrontmatter } from "@/lib/markdown";

// Predefined gradient backgrounds for the cards
const gradientBgs = [
  "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
  "bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200",
  "bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200",
  "bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200",
  "bg-gradient-to-br from-red-50 to-rose-100 hover:from-red-100 hover:to-rose-200",
  "bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200",
  "bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200",
  "bg-gradient-to-br from-yellow-50 to-amber-100 hover:from-yellow-100 hover:to-amber-200",
  "bg-gradient-to-br from-emerald-50 to-teal-100 hover:from-emerald-100 hover:to-teal-200",
  "bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200",
];

// Randomly assign a gradient background to each roadmap card
const getRandomGradient = () => {
  const randomIndex = Math.floor(Math.random() * gradientBgs.length);
  return gradientBgs[randomIndex];
};

// Get difficulty color based on level
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "beginner":
      return "bg-green-100 text-green-800 border-green-200";
    case "intermediate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "advanced":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function RoadmapCards({ roadmaps }: { roadmaps: RoadmapFrontmatter[] }) {
  return (
    <section id="roadmaps" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select a roadmap that matches your interests and current skill
            level. Each path is carefully designed to take you from basics to
            advanced concepts.
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmaps.map((roadmap, index) => {
            const bgColor = gradientBgs[index % gradientBgs.length];
            return (
              <Link key={roadmap.slug} href={`/roadmap/${roadmap.slug}`}>
                <Card
                  className={`group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-0 ${bgColor} backdrop-blur-sm`}>
                  <CardHeader className="pb-4 relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                        <TrendingUp className="h-6 w-6 text-gray-700" />
                      </div>
                      <Badge
                        variant="outline"
                        className={`${getDifficultyColor(
                          roadmap.difficulty
                        )} text-xs font-medium`}>
                        {roadmap.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 leading-tight group-hover:text-slate-900 transition-colors">
                      {roadmap.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600 font-medium">
                        {roadmap.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {roadmap.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                        Start Learning
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-slate-700 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
