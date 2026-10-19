
import { BrowserRouter, Routes, Route } from "./assets"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from "./pages/about"
import Contact from "./pages/contact"

function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-slate-600">Page not found.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
