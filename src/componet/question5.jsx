import { useState } from "react";

export default function Question5() {
  const [number, setNumber] = useState(0);

  function increaseNumber() {
    setNumber(number + 1);
  }

  function decreaseNumber() {
    if (number <= 0) {
      return;
    }

    setNumber(number - 1);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-950">
      <div className="flex items-center gap-8 rounded-2xl bg-slate-900 p-8 shadow-2xl">
        
        <button
          onClick={decreaseNumber}
          className="size-12 rounded-xl bg-red-600 text-2xl font-bold text-white transition hover:bg-red-700 active:scale-95"
        >
          -
        </button>

        <p className="min-w-16 text-center text-4xl font-bold text-white">
          {number}
        </p>

        <button
          onClick={increaseNumber}
          className="size-12 rounded-xl bg-green-600 text-2xl font-bold text-white transition hover:bg-green-700 active:scale-95"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Question5;