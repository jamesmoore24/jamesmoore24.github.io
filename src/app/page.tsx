import Header from "../components/Header";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { SiGooglescholar } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center pt-24">
        <h1 className="font-noto-serif text-6xl text-gray-800 text-center mb-8">
          hi, my name is james :)
        </h1>

        <div className="flex space-x-6">
          <a
            href="https://github.com/jamesmoore24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="mailto:jame.moore24@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Email"
          >
            <HiMail size={32} />
          </a>

          <a
            href="https://x.com/james_moore_24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Twitter"
          >
            <FaXTwitter size={32} />
          </a>

          <a
            href="https://scholar.google.com/citations?user=gdUqlcoAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Google Scholar"
          >
            <SiGooglescholar size={32} />
          </a>
        </div>
      </div>

      <footer className="pb-8 px-8">
        <div className="font-noto-serif text-center text-sm text-gray-600 space-y-1">
          <p> made with</p>
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
