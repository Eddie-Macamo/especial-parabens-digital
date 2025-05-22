
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface MessageCardProps {
  id: string;
  name: string;
  message: string;
  emoji?: string;
  imageUrl?: string;
  audioUrl?: string;
  likesCount?: number;
}

const MessageCard = ({
  id,
  name,
  message,
  emoji,
  imageUrl,
  audioUrl,
  likesCount = 0
}: MessageCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(likesCount);

  const handleLike = () => {
    if (!liked) {
      const newLikes = likes + 1;
      setLiked(true);
      setLikes(newLikes);
      
      // Atualizar likes no localStorage
      const storedMessages = localStorage.getItem('birthdayMessages');
      if (storedMessages) {
        const messages = JSON.parse(storedMessages);
        const updatedMessages = messages.map((msg: any) => {
          if (msg.id === id) {
            return { ...msg, likesCount: newLikes };
          }
          return msg;
        });
        localStorage.setItem('birthdayMessages', JSON.stringify(updatedMessages));
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-festive-gold/20 p-5 h-full animate-fade-in flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-lg text-festive-purple">{name}</h3>
        {emoji && <span className="text-2xl">{emoji}</span>}
      </div>
      
      <p className="text-gray-700 mb-4 flex-grow">{message}</p>
      
      {imageUrl && (
        <div className="mb-3">
          <img 
            src={imageUrl} 
            alt="Imagem anexada à mensagem" 
            className="rounded-md w-full h-48 object-cover"
          />
        </div>
      )}
      
      {audioUrl && (
        <div className="mb-3">
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      )}
      
      <div className="flex items-center justify-end mt-2">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
            liked 
              ? 'text-red-500 bg-red-50' 
              : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
