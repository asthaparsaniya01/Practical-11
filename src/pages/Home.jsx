
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6">
      <div className="max-w-3xl text-center">
        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
          Welcome to our website
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Build Something
          <span className="text-indigo-600"> Amazing</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Explore our website to learn more about our team,
          our mission, and how to get in touch with us.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/about"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Learn More
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
