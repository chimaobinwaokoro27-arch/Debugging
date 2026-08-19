import { useState } from "react";

export default function Question3() {
  const [number, setNumber] = useState(0);

  function increaseNumber() {
    setNumber(number + 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-80 rounded-2xl bg-slate-900 p-8 text-center shadow-2xl">
        <h1 className="mb-2 text-2xl font-bold text-white">
          Question3: Counter
        </h1>

        <p className="mb-6 text-6xl font-bold text-white">
          {number}
        </p>

        <button
          onClick={increaseNumber}
          className="w-full rounded-xl bg-green-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 active:scale-95"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
export default Question3;