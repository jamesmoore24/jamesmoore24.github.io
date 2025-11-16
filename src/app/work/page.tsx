import Header from "../../components/Header";

export default function Work() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16 px-8 max-w-4xl">
        <div className="font-noto-serif text-gray-800 space-y-8">
          <h1 className="text-4xl font-medium mb-12">work</h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium">meta (formerly facebook)</h2>
              <h3 className="text-lg font-medium mt-1">
                machine learning engineer
              </h3>
              <p className="text-sm text-gray-600 italic mt-1">current</p>
              <p className="mt-2 leading-relaxed">
                i train and deploy language identification models on the{" "}
                <a
                  href="https://pytorch.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  pytorch
                </a>{" "}
                ai translation team in collaboration with{" "}
                <a
                  href="https://ai.meta.com/research/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  fair (ai at meta)
                </a>
                {
                  ". in my first ~5 months at meta, i was able to solve critical problems related to english recall and model quality. this resulted in the deployment of an improved language identification model which mitigated several major client issues across IG, FB, and GenAI and improved downstream system quality earning meta millions of dollars a year. "
                }
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium">anystudent</h2>
              <h3 className="text-lg font-medium mt-1">co-founder</h3>
              <p className="text-sm text-gray-600 italic mt-1">
                aug 2024 - dec 2024
              </p>
              <p className="mt-2 leading-relaxed">
                i built tools to help teachers use ai to teach more effectively.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium">capital one</h2>
              <h3 className="text-lg font-medium mt-1">
                software engineering intern
              </h3>
              <p className="text-sm text-gray-600 italic mt-1">
                jun 2024 - aug 2024
              </p>
              <p className="mt-2 leading-relaxed">
                i used machine learning to help coordinate cyber security
                efforts to keep customers safe.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium">
                mit undergraduate research assistant
              </h2>
              <p className="text-sm text-gray-600 italic mt-1">
                feb 2024 - may 2024
              </p>
              <p className="mt-2 leading-relaxed">
                i used nlp to analyze directors of publicly traded companies and
                assess whether their tech-savviness had an impact on the
                company&apos;s financial performance.{" "}
                <a
                  href="https://cisr.mit.edu/publication/2025_0301_SavvyBoardsUpdate_WeillWoernerBannerMoore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
                >
                  article (co-authored with prof. woerner)
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium">
                mit eecs teaching assistant and grader
              </h2>
              <p className="text-sm text-gray-600 italic mt-1">
                feb 2024 - may 2025
              </p>
              <p className="mt-2 leading-relaxed">
                i helped teach and grade for 6.390 machine learning and 6.380
                inference.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium">mit student</h2>
              <p className="text-sm text-gray-600 italic mt-1">
                aug 2021 - may 2025
              </p>
              <p className="mt-2 leading-relaxed">
                learning from and having fun with brilliant people :)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
