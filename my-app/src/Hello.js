import { useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm Created!");

    return () => {
      console.log("I'm Destroyed!");
    };
  }, []);

  return <h1>Hello!</h1>;
}

export default Hello;
