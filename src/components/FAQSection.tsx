import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  
  const faqs = [
    {
      question: "What is MoodBuddy?",
      answer: "MoodBuddy is an AI-powered chatbot designed to provide emotional support and mental well-being assistance. It offers 24/7 availability, empathetic responses, and personalized guidance to help users navigate their emotional journeys."
    },
    {
      question: "Is MoodBuddy a replacement for professional therapy?",
      answer: "No, MoodBuddy is not a replacement for professional therapy. While it can provide support and guidance, it's designed to complement, not replace, professional mental health services. If you're experiencing severe mental health issues, please consult with a qualified mental health professional."
    },
    {
      question: "How does MoodBuddy ensure my privacy?",
      answer: "MoodBuddy takes your privacy seriously. All conversations are encrypted and confidential. We do not share your personal information with third parties. For more details, please review our Privacy Policy."
    },
    {
      question: "Can I use MoodBuddy on different devices?",
      answer: "Yes, MoodBuddy is accessible on various devices including smartphones, tablets, and computers. You can use it wherever you have an internet connection, making it convenient to get support anytime, anywhere."
    },
    {
      question: "How does the AI in MoodBuddy work?",
      answer: "MoodBuddy uses advanced natural language processing and machine learning algorithms to understand and respond to your messages. It's trained on a wide range of mental health topics and continuously learns to provide more accurate and helpful responses."
    },
    {
      question: "Is there a cost to use MoodBuddy?",
      answer: "MoodBuddy offers both free and premium services. The basic features are available at no cost, while advanced features and unlimited usage may require a subscription. Check our pricing page for more details."
    }
  ]
  
  export const FAQSection: React.FC = () => {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
  
  