"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <span>Can I have multiple subscriptions?</span>

        <span>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p>
          Yes, you can have multiple subscriptions.
        </p>
      )}
    </div>
  );
}
