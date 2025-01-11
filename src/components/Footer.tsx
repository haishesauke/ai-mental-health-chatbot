import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">MoodBuddy</h3>
            <p className="text-base">Your personal companion for emotional support and mental well-being.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:underline text-base">About Us</Link></li>
              <li><Link to="/resources" className="hover:underline text-base">Resources</Link></li>
              <li><Link to="/contact" className="hover:underline text-base">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:underline text-base">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="hover:underline text-base">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline text-base">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Facebook size={28} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Twitter size={28} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Instagram size={28} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-700 text-center">
          <p className="text-base">&copy; {new Date().getFullYear()} MoodBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

