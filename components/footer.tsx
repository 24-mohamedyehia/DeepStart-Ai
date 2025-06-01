import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DeepStart.AI</h3>
            <p className="text-slate-400">
              Your guided journey to mastering artificial intelligence and
              machine learning concepts.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmaps"
                  className="text-slate-400 hover:text-white transition-colors">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} DeepStart.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
