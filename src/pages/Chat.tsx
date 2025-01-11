import ChatInterface from '../components/ChatInterface'

const ChatPage: React.FC = () => {
  return (
    <main className="flex-grow py-8">
      <div className="container mx-auto px-6">
        <ChatInterface />
      </div>
    </main>
  )
}

export default ChatPage

