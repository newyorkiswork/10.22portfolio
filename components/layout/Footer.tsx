import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-space text-lg font-bold text-slate-900 dark:text-white">
              Robert<span className="text-purple-600">.</span>
            </h3>
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
              AI-first innovator and developer building the future of intelligent systems.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Vision", path: "/vision" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: "LinkedIn", path: "#" },
                { name: "Twitter", path: "#" },
                { name: "GitHub", path: "#" },
                { name: "Medium", path: "#" },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Service", path: "#" },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
          <p>© {new Date().getFullYear()} Robert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
