import { Link } from 'react-router-dom'
import { Button } from "./ui/button"

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-blue-600">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          <span className="text-2xl font-bold text-blue-800">MoodBuddy</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-lg text-gray-600 hover:text-blue-800 transition-colors">About Us</Link>
          <Link to="/resources" className="text-lg text-gray-600 hover:text-blue-800 transition-colors">Resources</Link>
          <Link to="/contact" className="text-lg text-gray-600 hover:text-blue-800 transition-colors">Contact Us</Link>
          <Link to="/chat">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2">
              Start Chatting
            </Button>
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden text-lg px-4 py-2">Menu</Button>
      </div>
    </header>
  )
}

export default Header

