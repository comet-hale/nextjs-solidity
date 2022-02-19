import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);
  return count;
};

const SimpleComponent = () => {
  return <h1>Simple Component</h1>;
};

export default function HooksPages() {
  const count = useCounter();
  return (
    <>
      <h1>Hello Word - {count}</h1>
      <SimpleComponent />
    </>
  );
}
