
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSubmitted(false)
  }

  return (
    <section className="min-h-[75vh] bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-xl">
        <h1 className="text-center text-4xl font-bold text-slate-900">
          Contact Us
        </h1>
        <p className="mt-3 text-center text-slate-600">
          Have a question? Send us a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Send Message
          </button>

          {submitted && (
            <p role="status" className="text-center text-green-600">
              Thank you! Your form was submitted locally.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
