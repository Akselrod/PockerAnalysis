import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
export default function CardSelector({ selectedCards, onCardSelect, onCardRemove, maxCards = 2, title = "Select Cards" }) {
  const [selectedSuit, setSelectedSuit] = useState(null);
  const getSuitColor = (suit) => (suit === '♥' || suit === '♦' ? 'text-red-600' : 'text-gray-900');
  const getSuitBg = (suit) => (suit === '♥' || suit === '♦' ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200');
  const isCardSelected = (rank, suit) => selectedCards.includes(`${rank}${suit}`);
  const handleCardClick = (rank, suit) => {
    const card = `${rank}${suit}`;
    if (isCardSelected(rank, suit)) {
      onCardRemove(card);
    } else if (selectedCards.length < maxCards) {
      onCardSelect(card);
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-2">
          {selectedCards.map((card, index) => (
            <Badge key={index} variant="outline" className="px-3 py-2 text-lg font-bold card-shadow">
              <span className={getSuitColor(card[1])}>{card}</span>
              <button onClick={() => onCardRemove(card)} className="ml-2 hover:bg-gray-200 rounded-full p-1">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        {SUITS.map((suit) => (
          <Button key={suit} variant={selectedSuit === suit ? "default" : "outline"} onClick={() => setSelectedSuit(selectedSuit === suit ? null : suit)} className={`w-12 h-12 text-2xl font-bold ${getSuitColor(suit)} ${selectedSuit === suit ? 'bg-poker-green text-white' : getSuitBg(suit)}`}>
            {suit}
          </Button>
        ))}
      </div>
      {selectedSuit && (
        <div className="grid grid-cols-6 md:grid-cols-13 gap-2">
          {RANKS.map((rank) => {
            const isSelected = isCardSelected(rank, selectedSuit);
            const isDisabled = selectedCards.length >= maxCards && !isSelected;
            return (
              <Button key={rank} variant={isSelected ? "default" : "outline"} onClick={() => handleCardClick(rank, selectedSuit)} disabled={isDisabled} className={`h-12 text-lg font-bold transition-all duration-200 ${isSelected ? 'bg-poker-green text-white glow-effect' : isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-50 hover:border-poker-green'}`}>
                {rank}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
