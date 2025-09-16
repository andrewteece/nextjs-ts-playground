"use client";

import { useState } from "react";
import Counter from "../Counter";

export default function PlayPage() {
  const [echo, setEcho] = useState("");

  const callApi = async () => {
    const res = await fetch("/api/echo", {
      method: "POST",
      body: JSON.stringify({ msg: "hello" }),
    });
    const data = (await res.json()) as { msg: string };
    setEcho(data.msg);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Playground</h2>
      <Counter />
      <button className="rounded-md border px-3 py-2" onClick={callApi}>
        Call /api/echo
      </button>
      {echo && <p>API said: {echo}</p>}
    </div>
  );
}
