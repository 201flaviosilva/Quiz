import { useState } from "react";

export function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <section id="center">
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </section>
  );
}
