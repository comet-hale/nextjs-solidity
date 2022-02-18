import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);
};

const SimpleComponent = () => {
  return <h1>Simple Component</h1>;
};

export default function Hooks() {
  return (
    <>
      <h1>Hello Word</h1>
      <SimpleComponent />
    </>
  );
}
