
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Upload, X } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '../components/Layout';
import EmojiPicker from '../components/EmojiPicker';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';

const NewMessage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [audioPreview, setAudioPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAudioPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const removeAudio = () => {
    setAudioPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Por favor, informe seu nome.');
      return;
    }
    
    if (!message.trim()) {
      toast.error('Por favor, escreva uma mensagem.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulando envio para um backend
    setTimeout(() => {
      // Em um cenário real, enviaríamos os dados para o backend aqui
      setIsSubmitting(false);
      toast.success('Mensagem enviada com sucesso!');
      navigate('/mensagem-enviada');
    }, 1500);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-festive-purple mb-6 text-center">
          Envie uma Mensagem Especial
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg border border-festive-gold/30 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-festive-purple font-medium mb-1">
                Seu Nome
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-festive-blue/30 focus:border-festive-blue focus:ring-festive-blue"
                placeholder="Como você quer ser identificado?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-festive-purple font-medium mb-1">
                Sua Mensagem
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-[150px] border-festive-blue/30 focus:border-festive-blue focus:ring-festive-blue"
                placeholder="Escreva sua mensagem de carinho para o aniversariante..."
                required
              />
            </div>
            
            <div>
              <label className="block text-festive-purple font-medium mb-1">
                Adicione um Emoji
              </label>
              <div className="flex items-center gap-3">
                <EmojiPicker onSelect={setSelectedEmoji} />
                {selectedEmoji && (
                  <div className="text-2xl bg-gray-100 p-2 rounded-md">
                    {selectedEmoji}
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-festive-purple font-medium mb-1">
                  Adicionar Imagem (opcional)
                </label>
                <div className="relative">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('image-upload')?.click()}
                    className="w-full flex items-center justify-center gap-2 border-festive-blue/30 text-festive-blue hover:bg-festive-blue/10"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Carregar Imagem</span>
                  </Button>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
                
                {imagePreview && (
                  <div className="mt-3 relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow-sm hover:bg-white"
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-festive-purple font-medium mb-1">
                  Adicionar Áudio (opcional)
                </label>
                <div className="relative">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('audio-upload')?.click()}
                    className="w-full flex items-center justify-center gap-2 border-festive-blue/30 text-festive-blue hover:bg-festive-blue/10"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Carregar Áudio</span>
                  </Button>
                  <input
                    id="audio-upload"
                    type="file"
                    accept="audio/*"
                    className="hidden"
                    onChange={handleAudioChange}
                  />
                </div>
                
                {audioPreview && (
                  <div className="mt-3 relative">
                    <audio controls className="w-full">
                      <source src={audioPreview} />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                    <button
                      type="button"
                      onClick={removeAudio}
                      className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow-sm hover:bg-white"
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-festive-gold hover:bg-festive-gold/80 text-white font-bold py-3 text-lg"
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewMessage;
