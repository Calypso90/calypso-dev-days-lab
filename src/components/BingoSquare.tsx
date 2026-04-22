import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-4 border-black transition-all duration-100 select-none min-h-[70px] text-sm font-bold leading-tight';

  const stateClasses = square.isFreeSpace
    ? 'bg-black text-yellow text-base'
    : square.isMarked
      ? isWinning
        ? 'bg-yellow text-black scale-105'
        : 'bg-yellow text-black'
      : 'bg-white text-black hover:bg-gray-50 active:scale-95';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto uppercase">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-black text-lg font-bold">✓</span>
      )}
    </button>
  );
}
