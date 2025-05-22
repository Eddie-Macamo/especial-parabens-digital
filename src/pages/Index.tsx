
import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import Layout from '../components/Layout';
import CountdownTimer from '../components/CountdownTimer';
import { Button } from '../components/ui/button';

const Index = () => {
  // Em um cenário real, esses dados viriam de um backend
  const birthdayPersonName = "Maria Silva";
  const birthdayImage = "/placeholder.svg"; // Imagem placeholder temporária

  return (
    <Layout withAnimations={true}>
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-festive-purple mb-4">
            Parabéns Especial
          </h1>
          <p className="text-xl text-festive-blue mb-6">
            Celebre esse momento especial compartilhando sua mensagem!
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-festive-gold/30 p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img
                src={birthdayImage}
                alt={birthdayPersonName}
                className="rounded-full border-4 border-festive-purple/50 shadow-lg w-48 h-48 object-cover mx-auto animate-pulse-scale"
              />
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-festive-blue mb-3">
                Feliz aniversário, {birthdayPersonName}!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Deixe uma mensagem de carinho e faça parte desse momento especial!
              </p>
              
              <Button asChild className="bg-festive-gold hover:bg-festive-gold/80 text-white font-bold text-lg py-6 px-8 rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105">
                <Link to="/nova-mensagem" className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <CountdownTimer />
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-festive-purple mb-4">
            Não perca a oportunidade de expressar seu carinho!
          </h2>
          <p className="text-gray-700 mb-6">
            Sua mensagem ficará guardada no mural especial e o aniversariante poderá rever sempre que quiser.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/nova-mensagem" className="bg-festive-blue hover:bg-festive-blue/80 text-white px-6 py-3 rounded-md shadow transition-colors">
              Escrever Mensagem
            </Link>
            <Link to="/mural" className="bg-festive-purple hover:bg-festive-purple/80 text-white px-6 py-3 rounded-md shadow transition-colors">
              Ver Mural de Mensagens
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
