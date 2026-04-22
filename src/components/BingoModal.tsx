import { useRef } from 'react';

interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  // Generate confetti particles once using ref
  const confettiRef = useRef<Array<{ id: number; left: number; delay: number }> | null>(null);

  if (!confettiRef.current) {
    confettiRef.current = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
    }));
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-6 border-black p-12 text-center drop-shadow-[6px_6px_0px_rgba(0,0,0,0.9)] animate-yellow-pulse">
        <h1 className="text-7xl font-bold text-black mb-4 uppercase tracking-wider">
          BINGO!
        </h1>
        <p className="text-2xl text-black font-bold mb-8 uppercase">
          YOU GOT A LINE!
        </p>

        <button
          onClick={onDismiss}
          className="bg-black border-4 border-black text-yellow font-bold py-4 px-12 text-lg uppercase tracking-wide hover:bg-yellow hover:text-black active:scale-95 transition-all"
        >
          PLAY AGAIN
        </button>

        {/* Confetti particles */}
        {confettiRef.current?.map((particle) => (
          <div
            key={particle.id}
            className="confetti"
            style={{
              left: `${particle.left}%`,
              top: '-10px',
              backgroundColor: particle.id % 3 === 0 ? '#ffff00' : particle.id % 3 === 1 ? '#000000' : '#ffffff',
              width: '8px',
              height: '8px',
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
