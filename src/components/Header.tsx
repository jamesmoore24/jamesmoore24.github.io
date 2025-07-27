import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-green-50 border-b border-black z-50 py-8 px-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="font-noto-serif text-gray-700 hover:text-gray-900 transition-colors relative group"
        >
          jmoore.info
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <nav>
          <ul className="flex space-x-8 font-noto-serif text-gray-700">
            <li>
              <Link
                href="/work"
                className="relative group transition-colors hover:text-gray-900"
              >
                work
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/common-book"
                className="relative group transition-colors hover:text-gray-900"
              >
                common book
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/thoughts"
                className="relative group transition-colors hover:text-gray-900"
              >
                thoughts
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
