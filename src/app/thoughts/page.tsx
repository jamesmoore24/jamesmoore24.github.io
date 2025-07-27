import Header from "../../components/Header";

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

            <div className="text-gray-600 italic">
              <p>coming soon...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
