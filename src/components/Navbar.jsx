
import { Link } from 'react-router-dom'

export default function Navbar() {
  const linkStyle =
    'rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600'

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyWebsite
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/" className={linkStyle}>
            Home
          </Link>
          <Link to="/about" className={linkStyle}>
            About
          </Link>
          <Link to="/contact" className={linkStyle}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
