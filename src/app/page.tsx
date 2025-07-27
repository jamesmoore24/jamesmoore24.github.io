import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-24">
        <h1 className="font-noto-serif text-6xl text-gray-800 text-center">
          hi, my name is james :)
        </h1>
      </div>

      <footer className="pb-8 px-8">
        <div className="font-noto-serif text-center text-sm text-gray-600 space-y-1">
          <p>made with</p>
          <p>
            github pages • cursor • claude •{" "}
            <a
              href="https://fonts.google.com/share?selection.family=Noto+Serif:ital,wght@0,100..900;1,100..900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-600 transition-colors"
            >
              google fonts (noto serif)
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
