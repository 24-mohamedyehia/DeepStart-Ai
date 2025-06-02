import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RoadmapCards } from "@/components/roadmap-cards";
import { getAllRoadmaps } from "@/lib/markdown";

export default async function HomePage() {
  const roadmaps = await getAllRoadmaps();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            AI Learning Roadmaps
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your guided journey to mastering artificial intelligence and machine
            learning concepts.
          </p>
        </div>
        <RoadmapCards roadmaps={roadmaps} />
      </main>
      <Footer />
    </div>
  );
}
