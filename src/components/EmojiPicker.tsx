
import React, { useState } from 'react';

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

const EmojiPicker = ({ onSelect }: EmojiPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const emojis = [
    '😊', '😍', '🎉', '🎂', '🎁', '🎈', '🎊', '❤️', 
    '🥳', '✨', '🌟', '👏', '🥰', '🙏', '🎯', '🌈'
  ];

  const handleSelect = (emoji: string) => {
    onSelect(emoji);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 bg-festive-purple/10 hover:bg-festive-purple/20 rounded-md transition-colors text-festive-purple flex items-center gap-2"
      >
        <span>Adicionar emoji</span>
        <span>😊</span>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md border border-gray-200 p-2 grid grid-cols-4 gap-2 w-[200px]">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => handleSelect(emoji)}
              className="text-2xl hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-colors"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
