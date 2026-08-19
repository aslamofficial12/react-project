"use client";

import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        What is React?
      </button>

      {open && <p>React is a JavaScript library.</p>}
    </div>
  );
}
