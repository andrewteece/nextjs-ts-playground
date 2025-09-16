// src/app/(play)/Counter.tsx
"use client";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border px-3 py-2">
      <span>Count: {count}</span>
      <Button size="sm" onClick={() => setCount((c) => c + 1)}>
        +1
      </Button>
      <Button size="sm" variant="outline" onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  );
}
