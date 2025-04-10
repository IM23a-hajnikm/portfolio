import Link from "next/link"

export default function Footer() {
  return (
    (<footer className="border-t border-gray-200 dark:border-gray-800 mt-auto bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Martin Hajnik. All rights reserved.</p>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link
                  href="/impressum"
                  className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:underline">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>)
  );
}

