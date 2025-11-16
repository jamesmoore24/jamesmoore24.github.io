import Header from "../../components/Header";
import Link from "next/link";

export default function Thoughts() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16 px-8 max-w-4xl">
        <div className="font-noto-serif text-gray-800 space-y-8">
          <h1 className="text-4xl font-medium mb-12">thoughts</h1>

          <div className="space-y-6">
            <div className="space-y-12">
              {/* Blog Post: Problem solving */}
              <article className="border-l-4 border-gray-300 pl-6 py-6">
                <header className="mb-6">
                  <h2 className="text-3xl font-medium text-gray-800 mb-2">
                    <Link
                      href="/thoughts/2"
                      className="hover:text-gray-600 transition-colors"
                    >
                      problem solving
                    </Link>
                  </h2>
                  <time className="text-sm text-gray-500 italic">
                    November 2025
                  </time>
                </header>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
