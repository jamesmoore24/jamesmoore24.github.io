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
            <p className="text-lg leading-relaxed text-gray-700">
              my writing and reflections on technology, life, and everything in
              between.
            </p>

            <div className="space-y-12">
              {/* Blog Post: Problem solving */}
              <article className="border-l-4 border-gray-300 pl-6 py-6">
                <header className="mb-6">
                  <h2 className="text-3xl font-medium text-gray-800 mb-2">
                    <Link
                      href="/thoughts/2"
                      className="hover:text-gray-600 transition-colors"
                    >
                      Problem solving
                    </Link>
                  </h2>
                  <time className="text-sm text-gray-500 italic">
                    November 2025
                  </time>
                </header>

                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Progress often follows the Pareto Principle: 80% of the
                    progress comes from 20% of the time. As you get more
                    efficient, yesterday’s “20%” becomes today’s “80%” of wasted
                    time—reminding us that not all hours are equal.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    So what makes the efficient 20% special? In my experience,
                    four ingredients must be present: intent, environment,
                    speed, and a goal.
                  </p>
                  <Link
                    href="/thoughts/2"
                    className="inline-block text-gray-600 hover:text-gray-800 transition-colors text-sm mt-4"
                  >
                    read more →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
