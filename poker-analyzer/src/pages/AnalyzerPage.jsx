import React, { useState } from "react";
import CardSelector from "../components/CardSelector";
export default function AnalyzerPage() {
  const [holeCards, setHoleCards] = useState([]);
  const [boardCards, setBoardCards] = useState([]);
  const [position, setPosition] = useState(null);
  const [playerCount, setPlayerCount] = useState(6);
  const [opponentInfo, setOpponentInfo] = useState({});
  const [analysisData, setAnalysisData] = useState(null);
  const analyzeHand = () => {
    const dummy = {
      hand_strength: 0.72,
      equity: 61.4,
      recommendation: "raise",
      reasoning: "Top pair with strong kicker against loose range",
      opponent_ranges: [
        { type: "Top pair", probability: 28, for_opponent_position: opponentInfo.position },
        { type: "Flush draw", probability: 18, for_opponent_position: opponentInfo.position },
        { type: "Overpair", probability: 12, for_opponent_position: "general remaining opponents" },
      ],
      drawing_hands: [
        { type: "Straight draw", outs: 8 },
        { type: "Flush draw", outs: 9 }
      ],
      board_texture: "wet"
    };
    setAnalysisData(dummy);
  };
  return (
    <div className="p-4 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">Poker Hand Analyzer</h1>
      <CardSelector
        selectedCards={holeCards}
        onCardSelect={(card) => setHoleCards([...holeCards, card])}
        onCardRemove={(card) => setHoleCards(holeCards.filter((c) => c !== card))}
        title="Your Hole Cards"
        maxCards={2}
      />
    </div>
  );
}
