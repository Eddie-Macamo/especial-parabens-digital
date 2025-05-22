
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Trash } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { toast } = useToast();

  // Senha padrão para demonstração (em um ambiente real, isto seria validado no backend)
  const adminPassword = '123456';

  useEffect(() => {
    // Recuperar mensagens do localStorage
    const storedMessages = localStorage.getItem('birthdayMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === adminPassword) {
      setIsAuthenticated(true);
      toast({
        title: "Login bem-sucedido",
        description: "Bem-vindo ao painel de administração.",
      });
    } else {
      toast({
        title: "Erro de autenticação",
        description: "Senha incorreta. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteMessage = (id: string) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    
    // Atualizar localStorage
    localStorage.setItem('birthdayMessages', JSON.stringify(updatedMessages));
    
    toast({
      title: "Mensagem removida",
      description: "A mensagem foi removida com sucesso.",
    });
  };

  if (!isAuthenticated) {
    return (
      <Layout withAnimations={false}>
        <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-festive-purple mr-2" />
            <h1 className="text-2xl font-bold text-festive-purple">Área Administrativa</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha de Administrador
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha de administrador"
                className="w-full"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Use a senha: ****** (apenas para demonstração)</p>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-festive-purple hover:bg-festive-purple/80"
            >
              Acessar
            </Button>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout withAnimations={false}>
      <div className="container mx-auto py-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-festive-purple mr-2" />
              <h1 className="text-2xl font-bold text-festive-purple">Painel de Administração</h1>
            </div>
            <div className="text-sm text-gray-500">
              Total de mensagens: <span className="font-bold">{messages.length}</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Mensagem</TableHead>
                  <TableHead>Emoji</TableHead>
                  <TableHead>Curtidas</TableHead>
                  <TableHead>Anexos</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                      Nenhuma mensagem encontrada
                    </TableCell>
                  </TableRow>
                ) : (
                  messages.map((message) => (
                    <TableRow key={message.id}>
                      <TableCell className="font-medium">{message.name}</TableCell>
                      <TableCell className="max-w-xs truncate">{message.message}</TableCell>
                      <TableCell>{message.emoji || '-'}</TableCell>
                      <TableCell>{message.likesCount}</TableCell>
                      <TableCell>
                        {message.imageUrl && <span className="text-sm text-blue-500">Imagem</span>}
                        {message.audioUrl && <span className="text-sm text-green-500">Áudio</span>}
                        {!message.imageUrl && !message.audioUrl && '-'}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteMessage(message.id)}
                          className="flex items-center gap-1"
                        >
                          <Trash className="h-4 w-4" />
                          <span>Remover</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
