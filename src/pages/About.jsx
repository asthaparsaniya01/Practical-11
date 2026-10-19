
export default function About() {
  return (
    <section className="min-h-[75vh] bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900">
          About Us
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          We are passionate about building modern, responsive,
          and user-friendly web applications using React and
          the latest frontend technologies.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-indigo-600">
              Our Mission
            </h2>
            <p className="mt-3 text-slate-600">
              Create useful and accessible digital experiences.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-indigo-600">
              Our Vision
            </h2>
            <p className="mt-3 text-slate-600">
              Make technology simple and enjoyable for everyone.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-indigo-600">
              Our Values
            </h2>
            <p className="mt-3 text-slate-600">
              Quality, creativity, and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
