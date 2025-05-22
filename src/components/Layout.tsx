
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Menu, X, Star, MessageSquare, Heart, Shield } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  withAnimations?: boolean;
}

const Layout = ({ children, withAnimations = false }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-festive-silver to-white">
      <header className="py-5 border-b border-festive-gold/30 bg-festive-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Award className="h-8 w-8 text-festive-gold" />
              <span className="text-2xl font-bold gold-gradient font-festive">Homenagem Exclusiva</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="flex items-center gap-1 text-festive-silver hover:text-festive-gold transition-colors">
                <Star className="h-4 w-4" />
                <span className="font-executive">Início</span>
              </Link>
              <Link to="/nova-mensagem" className="flex items-center gap-1 text-festive-silver hover:text-festive-gold transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span className="font-executive">Nova Mensagem</span>
              </Link>
              <Link to="/mural" className="flex items-center gap-1 text-festive-silver hover:text-festive-gold transition-colors">
                <Heart className="h-4 w-4" />
                <span className="font-executive">Mural</span>
              </Link>
              <Link to="/admin" className="flex items-center gap-1 text-festive-silver hover:text-festive-gold transition-colors">
                <Shield className="h-4 w-4" />
                <span className="font-executive">Administração</span>
              </Link>
            </nav>
            
            <div className="md:hidden">
              <button 
                className="p-2 text-festive-silver"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-festive-navy text-white z-50 absolute w-full border-b border-festive-gold/30">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link 
              to="/" 
              className="py-3 border-b border-festive-gold/20 text-festive-silver hover:text-festive-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Início</span>
              </div>
            </Link>
            <Link 
              to="/nova-mensagem" 
              className="py-3 border-b border-festive-gold/20 text-festive-silver hover:text-festive-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Nova Mensagem</span>
              </div>
            </Link>
            <Link 
              to="/mural" 
              className="py-3 border-b border-festive-gold/20 text-festive-silver hover:text-festive-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Mural</span>
              </div>
            </Link>
            <Link 
              to="/admin" 
              className="py-3 text-festive-silver hover:text-festive-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Administração</span>
              </div>
            </Link>
          </div>
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="py-8 text-center text-festive-navy bg-festive-silver border-t border-festive-gold/30">
        <div className="container mx-auto px-4">
          <p className="font-executive">© 2025 Homenagem Exclusiva - Feito para <span className="text-festive-accent font-semibold">Carlos Macamo</span></p>
          
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://wa.me/?text=Deixe%20uma%20mensagem%20especial%20para%20Carlos%20Macamo!" className="text-festive-accent hover:text-festive-gold transition-colors text-sm">
              Compartilhar no WhatsApp
            </a>
            <Link to="/admin" className="text-festive-navy hover:text-festive-gold transition-colors text-sm">
              Administração
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
