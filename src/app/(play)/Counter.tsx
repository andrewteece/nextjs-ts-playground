"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="inline-flex items-center gap-3 rounded-md border px-3 py-2">
      <span>Count: {count}</span>
      <button
        className="rounded bg-black px-3 py-1 text-white"
        onClick={() => setCount((c) => c + 1)}
      >
        +1
      </button>
      <button className="rounded border px-3 py-1" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
