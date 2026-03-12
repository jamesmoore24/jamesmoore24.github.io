import Header from "../../../components/Header";
import Link from "next/link";

export default function GinkgoHaiku() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16 px-8 max-w-4xl">
        <div className="font-noto-serif text-gray-800 space-y-8">
          <Link
            href="/thoughts"
            className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
          >
            ← back to thoughts
          </Link>

          <article className="space-y-8 mt-4">
            <header className="space-y-4">
              <h1 className="text-4xl font-medium text-gray-800">
                ginkgo haiku
              </h1>
              <time className="text-sm text-gray-500 italic block">
                March 2026
              </time>
            </header>

            <div className="prose prose-gray max-w-none space-y-6">
              <div className="py-12">
                <p className="leading-relaxed text-gray-700">
                  the light glimmers through<br />
                  the leaves of the ginkgo tree<br />
                  the brisk breeze pierces
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
