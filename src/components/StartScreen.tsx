interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-charcoal">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-white mb-2 uppercase tracking-wider">
          Bingo Mixer
        </h1>
        <p className="text-3xl text-yellow font-bold mb-12 uppercase tracking-wide">
          Find Your People
        </p>
        
        <div className="bg-white border-4 border-black p-8 mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]">
          <h2 className="font-bold text-black mb-4 text-xl uppercase">How to Play</h2>
          <ul className="text-left text-black text-base space-y-3 font-semibold">
            <li className="flex gap-2">
              <span>•</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-white border-4 border-black text-black font-bold py-6 px-8 text-xl uppercase tracking-wide hover:bg-yellow active:scale-95 transition-all duration-100 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
