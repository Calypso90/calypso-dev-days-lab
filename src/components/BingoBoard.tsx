import { BingoSquare } from './BingoSquare';
import type { BingoSquareData } from '../types';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({
  board,
  winningSquareIds,
  onSquareClick,
}: BingoBoardProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {board.map((square, index) => (
        <div
          key={square.id}
          style={{
            animation: `blockFall 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 30}ms both`,
          }}
        >
          <BingoSquare
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        </div>
      ))}
    </div>
  );
}
