import { useState } from "react";

export default function Question8() {
  const [number, setNumber] = useState(0);
  const step = 5;

  function increaseNumber() {
    setNumber(number + step);
  }

  function decreaseNumber() {
    setNumber(Math.max(0, number - step));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-80 rounded-2xl bg-slate-900 p-8 text-center shadow-2xl">
        <h1 className="mb-2 text-2xl font-bold text-white">
          Question8: Step Counter
        </h1>

        <p className="mb-2 text-6xl font-bold text-white">
          {number}
        </p>

        <p className="mb-6 text-sm text-slate-400">
          Step: {step}
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
export default Question8;