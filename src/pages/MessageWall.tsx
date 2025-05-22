
import React, { useState, useEffect } from 'react';
import { Calendar, Star } from 'lucide-react';
import Layout from '../components/Layout';
import MessageCard from '../components/MessageCard';

interface Message {
  id: string;
  name: string;
  message: string;
  emoji?: string;
  imageUrl?: string;
  audioUrl?: string;
  likesCount: number;
  timestamp: number;
}

const MessageWall = () => {
  const [filter, setFilter] = useState('recent');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Carregar mensagens do localStorage
    const storedMessages = localStorage.getItem('birthdayMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      // Dados de exemplo apenas para demonstração inicial
      const dummyMessages = [
        {
          id: '1',
          name: 'João Silva',
          message: 'Feliz aniversário! Desejo a você muita saúde, paz e felicidade. Que todos os seus sonhos se realizem!',
          emoji: '🎂',
          imageUrl: '/placeholder.svg',
          likesCount: 5,
          timestamp: Date.now() - 86400000
        },
        {
          id: '2',
          name: 'Maria Oliveira',
          message: 'Parabéns pelo seu dia! Que este novo ciclo seja repleto de conquistas e alegrias. Você merece o mundo!',
          emoji: '✨',
          likesCount: 3,
          timestamp: Date.now() - 43200000
        },
        {
          id: '3',
          name: 'Pedro Santos',
          message: 'Feliz aniversário, amigo! Que Deus continue abençoando sua vida com muita paz e sabedoria.',
          emoji: '🙏',
          likesCount: 7,
          timestamp: Date.now() - 21600000
        }
      ];
      
      localStorage.setItem('birthdayMessages', JSON.stringify(dummyMessages));
      setMessages(dummyMessages);
    }
  }, []);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    
    const storedMessages = localStorage.getItem('birthdayMessages');
    if (!storedMessages) return;
    
    const currentMessages = JSON.parse(storedMessages);
    
    if (newFilter === 'recent') {
      // Ordenar por data mais recente
      const sortedMessages = [...currentMessages].sort((a, b) => b.timestamp - a.timestamp);
      setMessages(sortedMessages);
    } else if (newFilter === 'popular') {
      // Ordenar por número de curtidas
      const sortedMessages = [...currentMessages].sort((a, b) => (b.likesCount || 0) - (a.likesCount || 0));
      setMessages(sortedMessages);
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-festive-purple mb-6 text-center">
          Mural de Mensagens
        </h1>
        
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-festive-blue font-medium">
              Veja todas as mensagens carinhosas dos amigos e familiares.
            </p>
            
            <div className="flex rounded-md overflow-hidden">
              <button
                onClick={() => handleFilterChange('recent')}
                className={`px-4 py-2 flex items-center gap-1 transition-colors ${
                  filter === 'recent'
                    ? 'bg-festive-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Calendar className="h-4 w-4" />
                <span>Mais recentes</span>
              </button>
              <button
                onClick={() => handleFilterChange('popular')}
                className={`px-4 py-2 flex items-center gap-1 transition-colors ${
                  filter === 'popular'
                    ? 'bg-festive-purple text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Star className="h-4 w-4" />
                <span>Mais curtidas</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              id={message.id}
              name={message.name}
              message={message.message}
              emoji={message.emoji}
              imageUrl={message.imageUrl}
              audioUrl={message.audioUrl}
              likesCount={message.likesCount}
            />
          ))}
        </div>
        
        {messages.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500 text-lg">
              Ainda não há mensagens no mural. Seja o primeiro a deixar uma mensagem!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MessageWall;
