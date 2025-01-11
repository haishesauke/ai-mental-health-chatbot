import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Chat from './pages/Chat'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

