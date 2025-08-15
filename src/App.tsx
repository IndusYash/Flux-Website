import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "@/pages/home"
// import Header from "@/components/layout/Header"   // teammate-owned
// import Footer from "@/components/layout/Footer"   // teammate-owned
// import Navbar from "@/components/layout/Navbar"   // teammate-owned

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        {/* <Header />
        <Navbar /> */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<div />} />
            <Route path="/faculty" element={<div />} />
            <Route path="/team" element={<div />} />
            <Route path="/contact" element={<div />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}
