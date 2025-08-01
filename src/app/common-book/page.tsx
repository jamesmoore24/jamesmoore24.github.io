import Header from "../../components/Header";

export default function CommonBook() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16 px-8 max-w-4xl">
        <div className="font-noto-serif text-gray-800 space-y-8">
          <h1 className="text-4xl font-medium mb-12">common place book</h1>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              interesting things i enjoy reading, watching, and listening to.
            </p>

            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://x.com/GabrielPeterss4/status/1897135833347711182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  gabriel&apos;s career advice
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://augmentingcognition.com/ltm.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  augmenting long term memory - michael nielsen
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://www.youtube.com/watch?v=BSFNl4roGlI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  ballade no. 1 in g minor, op. 23 - chopin (krystian zimerman)
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://www.youtube.com/watch?v=sEhQTjgoTdU&list=RDsEhQTjgoTdU&start_radio=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  spain - chick corea
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://www.youtube.com/watch?v=1b2LfAGkkpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  hank green&apos;s commencement speech to the mit class of 2025
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://x.com/bryan_johnson/status/1942279356975562753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  bryan johnson on mental clarity
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  neural networks: zero to hero - andrej karpathy
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://arxiv.org/pdf/1706.03762"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  attention is all you need - vaswani et al. (2017)
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://www.youtube.com/watch?v=x1NU68K0mfk&list=RDx1NU68K0mfk&start_radio=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  sabbat, part 2 - cortex
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a
                  href="https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  getting over it with bennett foddy
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
