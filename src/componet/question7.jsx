import { useState } from "react";

export default function Question7() {
  const [number, setNumber] = useState(0);

  function increaseNumber() {
    setNumber(number + 1);
  }

  function decreaseNumber() {
    setNumber(Math.max(0, number - 1));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-80 rounded-2xl bg-slate-900 p-8 text-center shadow-2xl">
        <h1 className="mb-2 text-2xl font-bold text-white">
          Question7: Counter
        </h1>

        <p className="mb-6 text-6xl font-bold text-white">
          {number}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={decreaseNumber}
            className="size-12 rounded-xl bg-red-600 text-2xl font-bold text-white transition hover:bg-red-700 active:scale-95"
          >
            -
          </button>

          <button
            onClick={increaseNumber}
            className="size-12 rounded-xl bg-green-600 text-2xl font-bold text-white transition hover:bg-green-700 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default Question7;