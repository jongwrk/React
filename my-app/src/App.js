import { useEffect, useState } from "react";
import Hello from "./Hello";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [isShow, setIsShow] = useState(true);

  console.log("I run always at rendering");

  function onClick() {
    setCount((current) => (current += 1));
  }

  function onChange(event) {
    const newValue = event.target.value;
    setKeyword(newValue);
  }

  function clickShow() {
    setIsShow((current) => !current);
  }

  useEffect(() => {
    console.log("I run only ONCE!");
  }, []);

  useEffect(() => {
    // EX: Call the API
    // state chage, ever what happen

    console.log("I run when the count changes: ", count);
  }, [count]);

  useEffect(() => {
    console.log(
      "I run when the keyword changes: ",
      keyword,
    );
  }, [keyword]);

  return (
    <div>
      {/* <h1 className={style.title}>Hello world!</h1>
      <div>
        <Button text={"Continue"}></Button>
      </div> */}

      <div>
        <input
          type="text"
          placeholder="Search here..."
          onChange={onChange}
        />
        <h1>click count : {count}</h1>
        <button onClick={onClick}>click me</button>
      </div>

      <hr />

      <div>
        {isShow ? <Hello /> : null}
        <button onClick={clickShow}>
          {isShow ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default App;
