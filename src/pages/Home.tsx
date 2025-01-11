import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { FAQSection } from '../components/FAQSection'
import { Clock, Heart, PersonStanding, Lock, Globe, Smartphone, Brain, PhoneCall } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "24/7 Availability",
    description: "Access support anytime, day or night, without waiting for appointments."
  },
  {
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    title: "Empathetic Support",
    description: "Experience compassionate and understanding responses tailored to your needs."
  },
  {
    icon: <PersonStanding className="w-12 h-12 text-blue-600" />,
    title: "Personal Growth",
    description: "Develop coping strategies and emotional resilience through guided conversations."
  },
  {
    icon: <Smartphone className="w-12 h-12 text-blue-600" />,
    title: "Easy Access",
    description: "Connect instantly through your device, wherever you are, whenever you need support."
  }
]

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: <Lock className="w-8 h-8 text-blue-600" />,
    title: "Privacy and Security",
    description: "Your conversations are encrypted and confidential, ensuring your privacy is protected at all times."
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Accessible Anywhere",
    description: "Whether you're at home or on the go, MoodBuddy is always just a click away on any device."
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "AI-Powered Insights",
    description: "Benefit from advanced AI technology that learns and adapts to provide personalized support and guidance."
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    title: "Professional Support",
    description: "While AI-powered, MoodBuddy can also connect you with human professionals when needed."
  }
]

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <section className="text-center mb-24">
          <h1 className="text-6xl font-bold text-blue-800 mb-8">
            Welcome to MoodBuddy
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Your personal companion for emotional support and mental well-being. 
            MoodBuddy is here to listen, understand, and guide you through your emotional journey.
          </p>
          <Link to="/chat">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg">
              Get Started
            </Button>
          </Link>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-semibold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-center text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-semibold text-center mb-12">Why Choose MoodBuddy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-24">
          <h2 className="text-4xl font-semibold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of users who have found comfort, support, and personal growth with MoodBuddy.
          </p>
          <Link to="/chat">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg">
              Chat with MoodBuddy Now
            </Button>
          </Link>
        </section>
      </div>

      <FAQSection />
    </main>
  )
}

export default Home

