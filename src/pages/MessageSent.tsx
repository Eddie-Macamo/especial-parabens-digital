
import React from 'react';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const MessageSent = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-12 text-center">
        <div className="bg-white rounded-xl shadow-lg border border-festive-gold/30 p-8 mb-8 luxury-card">
          <div className="flex justify-center mb-6">
            <div className="bg-festive-gold/20 p-5 rounded-full">
              <Award className="h-16 w-16 text-festive-gold" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-festive-navy mb-4 font-festive">
            <span className="gold-gradient">Mensagem Enviada com Sucesso</span>
          </h1>
          
          <p className="text-lg text-festive-charcoal mb-8 font-executive">
            Sua mensagem para Carlos Macamo foi enviada e logo estará disponível no mural digital.
            Agradecemos por fazer parte desta homenagem especial.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="luxury-button text-festive-navy">
              <Link to="/" className="font-executive">
                Voltar para o Início
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-festive-navy text-festive-navy hover:bg-festive-navy/5">
              <Link to="/mural" className="font-executive">
                Ver Mural de Mensagens
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="text-festive-navy/70">
          <p className="font-executive">Compartilhe o site e convide mais pessoas a deixarem mensagens para Carlos Macamo!</p>
        </div>
      </div>
    </Layout>
  );
};

export default MessageSent;
