import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function onChange(event) {
    const newValue = event.target.value;

    setTodo(newValue);
  }

  function onSubmit(event) {
    event.preventDefault();

    if (todo === "") {
      alert("Nothing was entered!");
      return;
    }

    setTodoList((current) => [...current, todo]);
    setTodo("");
  }

  function onClear() {
    setTodo("");
    setTodoList([]);
  }

  return (
    <div>
      <h1>My TODO List! ({todoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Input your jobs,,,"
          onChange={onChange}
          type="text"
          value={todo}
        ></input>
        <button>Add</button>
      </form>
      <button onClick={onClear}>Clear</button>
      <hr />
      <ul>
        {todoList.map((value, index) => (
          <li key={index}>{value.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
