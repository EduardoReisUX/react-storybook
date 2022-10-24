import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-bold text-5xl text-violet-500">Hello World</h1>
      <button
        className="px-4 py-2 border rounded border-red-500"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <p>{count}</p>
    </>
  );
}
