export const GameHeader = ({ score, moves, onReset }) => {
  return (
    <div className="game-header">
      <h1>Jogo da Memória AF Braga</h1>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">score:</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Moves:</span>
          <span className="stat-value">{moves}</span>
        </div>
      </div>
      <button className="reset-btn" onClick={onReset}>
        Tentar de Novo
      </button>
    </div>
  );
};
