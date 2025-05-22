
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Award } from 'lucide-react';
import Layout from '../components/Layout';
import CountdownTimer from '../components/CountdownTimer';
import { Button } from '../components/ui/button';

const Index = () => {
  const birthdayPersonName = "Carlos Macamo";
  const birthdayImage = "/placeholder.svg"; // Imagem placeholder temporária

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-festive-navy mb-4 font-festive">
            <span className="gold-gradient">Homenagem Executiva</span>
          </h1>
          <p className="text-xl text-festive-charcoal mb-6 font-executive">
            Uma celebração especial para um líder extraordinário
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-festive-gold/30 p-8 md:p-10 mb-16 luxury-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="rounded-full border-4 border-festive-gold shadow-lg p-1 bg-gradient-to-r from-festive-gold/20 to-festive-gold/10 mx-auto">
                <img
                  src={birthdayImage}
                  alt={birthdayPersonName}
                  className="rounded-full w-48 h-48 object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-festive-navy mb-3 font-festive">
                <span className="gold-gradient">Carlos Macamo</span>
              </h2>
              <p className="text-festive-accent font-semibold mb-2 text-lg">
                Visionário. Líder. Inspiração.
              </p>
              <p className="text-festive-charcoal mb-8 font-executive">
                Compartilhe suas palavras de admiração e reconhecimento para celebrar a trajetória de sucesso de um verdadeiro líder.
              </p>
              
              <Button asChild className="luxury-button text-festive-navy font-bold text-lg py-6 px-8 rounded-md shadow-md">
                <Link to="/nova-mensagem" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span className="font-executive">Enviar Mensagem</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <CountdownTimer />
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-festive-navy mb-4 font-festive">
            <span className="gold-gradient">Uma Jornada de Excelência</span>
          </h2>
          <p className="text-festive-charcoal mb-6 font-executive">
            Sua mensagem será preservada em um elegante mural digital, como um tributo duradouro às conquistas e ao legado de Carlos Macamo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/nova-mensagem" className="luxury-button text-festive-navy px-6 py-3 rounded-md shadow font-executive">
              Escrever Mensagem
            </Link>
            <Link to="/mural" className="bg-festive-navy hover:bg-festive-navy/80 text-white px-6 py-3 rounded-md shadow transition-colors font-executive">
              Ver Mural de Mensagens
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-festive-gold/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-6 w-6 text-festive-gold" />
            <h3 className="text-xl font-bold text-festive-navy font-festive">Excelência Reconhecida</h3>
          </div>
          <p className="text-festive-charcoal max-w-2xl mx-auto font-executive">
            Carlos Macamo representa a personificação da liderança visionária e da excelência empresarial. 
            Seu compromisso com a inovação e sua capacidade de inspirar aqueles ao seu redor o estabeleceram 
            como uma figura respeitada no mundo dos negócios.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
