import Button from "./Button";
import style from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={style.title}>Hello world!</h1>
      <Button text={"Continue"}></Button>
    </div>
  );
}

export default App;
