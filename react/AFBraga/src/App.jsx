import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { useGameLogic } from "./hooks/useGameLogic";
import { WinMessage } from "./components/WinMessage";

const cardValues = [
  { value: "/afbraga/logos/adninense.png" },
  { value: "/afbraga/logos/cdviatodos.png" },
  { value: "/afbraga/logos/gdfradelos.png" },
  { value: "/afbraga/logos/gdlouro.png" },
  { value: "/afbraga/logos/gdlousado.png" },
  { value: "/afbraga/logos/gdribeirao.png" },
  { value: "/afbraga/logos/operariofc.png" },
  { value: "/afbraga/logos/ruivanensefc.png" },
  { value: "/afbraga/logos/adninense.png" },
  { value: "/afbraga/logos/cdviatodos.png" },
  { value: "/afbraga/logos/gdfradelos.png" },
  { value: "/afbraga/logos/gdlouro.png" },
  { value: "/afbraga/logos/gdlousado.png" },
  { value: "/afbraga/logos/gdribeirao.png" },
  { value: "/afbraga/logos/operariofc.png" },
  { value: "/afbraga/logos/ruivanensefc.png" },
];

function App() {
  const {
    cards,
    flippedCards,
    matchedCards,
    score,
    moves,
    isLocked,
    isGameComplete,
    initializeGame,
    handleCardClick,
  } = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
