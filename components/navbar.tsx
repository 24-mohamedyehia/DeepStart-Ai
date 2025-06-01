import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                DeepStart.AI
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="#roadmaps">
              <Button variant="ghost">Roadmaps</Button>
            </Link>
            <Link href="#">
              <Button variant="ghost">About</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
