import { Card, CardContent } from "../components/ui/card"
import { Clock, Heart, PersonStanding, Smartphone, Brain } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "24/7 Availability",
    description: "Access support whenever you need it, day or night, without waiting for appointments."
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
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    title: "AI-Powered Intelligence",
    description: "Benefit from advanced AI technology that learns and adapts to provide better support."
  }
]

const AboutPage: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold text-blue-800 mb-12 text-center">About MoodBuddy</h1>
      
      <section className="mb-16">
        <p className="text-xl mb-8">
          At MoodBuddy, we believe that everyone deserves access to quality mental health support. Our mission is to make mental well-being accessible and affordable for all. We have developed an AI-powered chatbot that provides:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition duration-300 ease-in-out hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-8">
                {feature.icon}
                <h3 className="text-2xl font-semibold mt-6 mb-3">{feature.title}</h3>
                <p className="text-center text-gray-600 text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-6">Our Commitment</h2>
        <p className="text-xl mb-6">
          At MoodBuddy, we are dedicated to continuously improving our chatbot and expanding access to mental health support. We prioritize user privacy and security, striving to create a safe and supportive environment for all users.
        </p>
      </section>
      
      <section>
        <h2 className="text-4xl font-semibold mb-6">Disclaimer</h2>
        <p className="text-xl mb-6">
          MoodBuddy is an AI-powered chatbot and is not a substitute for professional medical advice. If you are experiencing a mental health crisis, please contact a mental health professional or emergency services immediately.
        </p>
        <p className="text-xl">
          For further transparency, we encourage users to review our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>.
        </p>
      </section>
    </main>
  )
}

export default AboutPage

