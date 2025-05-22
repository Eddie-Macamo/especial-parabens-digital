
import React from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper, Cake, Heart, MessageSquare, Shield } from 'lucide-react';
import Confetti from './animations/Confetti';
import Balloons from './animations/Balloons';

interface LayoutProps {
  children: React.ReactNode;
  withAnimations?: boolean;
}

const Layout = ({ children, withAnimations = true }: LayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {withAnimations && (
        <>
          <Confetti />
          <Balloons />
        </>
      )}
      
      <header className="py-4 border-b border-festive-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <PartyPopper className="h-6 w-6 text-festive-gold" />
              <span className="text-2xl font-bold text-festive-purple">Parabéns Especial</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="flex items-center gap-1 text-festive-purple hover:text-festive-gold transition-colors">
                <Cake className="h-4 w-4" />
                <span>Início</span>
              </Link>
              <Link to="/nova-mensagem" className="flex items-center gap-1 text-festive-purple hover:text-festive-gold transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>Enviar Mensagem</span>
              </Link>
              <Link to="/mural" className="flex items-center gap-1 text-festive-purple hover:text-festive-gold transition-colors">
                <Heart className="h-4 w-4" />
                <span>Mural</span>
              </Link>
              <Link to="/admin" className="flex items-center gap-1 text-festive-purple hover:text-festive-gold transition-colors">
                <Shield className="h-4 w-4" />
                <span>Administração</span>
              </Link>
            </nav>
            
            <div className="md:hidden">
              <button className="p-2 text-festive-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="py-6 text-center text-festive-purple/80 border-t border-festive-gold/20">
        <div className="container mx-auto px-4">
          <p>© 2025 Parabéns Especial - Feito com <Heart className="inline-block h-4 w-4 text-festive-gold" /> para momentos especiais</p>
          
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://wa.me/?text=Deixe%20uma%20mensagem%20de%20aniversário%20especial!" className="text-festive-blue hover:text-festive-gold transition-colors text-sm">
              Compartilhar no WhatsApp
            </a>
            <Link to="/admin" className="text-festive-purple hover:text-festive-gold transition-colors text-sm">
              Administração
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
