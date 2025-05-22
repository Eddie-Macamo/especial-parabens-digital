
import React from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const MessageSent = () => {
  return (
    <Layout withAnimations={true}>
      <div className="max-w-2xl mx-auto py-12 text-center">
        <div className="bg-white rounded-xl shadow-lg border border-festive-gold p-8 mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-festive-gold/20 p-5 rounded-full">
              <PartyPopper className="h-16 w-16 text-festive-gold" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-festive-purple mb-4">
            Mensagem Enviada com Sucesso!
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Sua mensagem foi enviada e logo estará disponível no mural de mensagens.
            Obrigado por fazer parte desse momento especial!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-festive-blue hover:bg-festive-blue/80">
              <Link to="/">
                Voltar para o Início
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-festive-purple text-festive-purple hover:bg-festive-purple/10">
              <Link to="/mural">
                Ver Mural de Mensagens
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="text-festive-purple/70">
          <p>Compartilhe o site e convide mais pessoas a deixarem mensagens!</p>
        </div>
      </div>
    </Layout>
  );
};

export default MessageSent;
