import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black border-b-4 border-yellow">
        <button
          onClick={onReset}
          className="text-yellow font-bold text-sm px-4 py-2 border-2 border-yellow hover:bg-yellow hover:text-black transition-all"
        >
          ← BACK
        </button>
        <h1 className="font-bold text-yellow text-2xl uppercase tracking-wider">Bingo Mixer</h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-black font-bold text-base py-3 px-4 bg-white border-b-2 border-black">
        TAP A SQUARE WHEN YOU FIND SOMEONE WHO MATCHES IT
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-yellow text-black text-center py-4 font-bold text-xl uppercase tracking-wide border-b-4 border-black animate-yellow-pulse">
          🎉 BINGO! YOU GOT A LINE! 🎉
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4 bg-white">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
