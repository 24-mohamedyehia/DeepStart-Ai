import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Target } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getRoadmapBySlug } from "@/lib/markdown";

export default async function RoadmapPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const roadmap = await getRoadmapBySlug(slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Roadmaps
            </Button>
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              {roadmap.title}
            </h1>
            <p className="text-lg text-slate-600 mb-6">{roadmap.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-slate-600">
                  <strong>Duration:</strong> {roadmap.duration}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-green-600" />
                <span className="text-sm text-slate-600">
                  <strong>Level:</strong> {roadmap.difficulty}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-slate-600">
                  <strong>Type:</strong> Self-paced
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <article className="prose prose-slate max-w-none prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-table:rounded-lg prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-2 prose-td:p-2 prose-code:bg-slate-100 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-img:rounded-lg prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-blue-300 prose-blockquote:bg-blue-50/50 prose-blockquote:p-4">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypePrism]}
              components={{
                table: ({ children, ...props }) => (
                  <table
                    className="w-full border-collapse border border-slate-300 rounded-lg overflow-hidden"
                    {...props}>
                    {children}
                  </table>
                ),
                th: ({ children, ...props }) => (
                  <th
                    className="bg-slate-100 p-2 border border-slate-200"
                    {...props}>
                    {children}
                  </th>
                ),
                td: ({ children, ...props }) => (
                  <td className="p-2 border border-slate-200" {...props}>
                    {children}
                  </td>
                ),
                pre: ({ children, ...props }) => (
                  <pre
                    className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto"
                    {...props}>
                    {children}
                  </pre>
                ),
                code: ({ inline, className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return inline ? (
                    <code
                      className="bg-slate-100 rounded px-1 py-0.5 text-pink-700"
                      {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}>
              {roadmap.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
}
