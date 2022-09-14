import React from "react";
import "./index.scss";

function App() {
  const [count, setCount] = React.useState(0);

  function onPlus() {
    setCount(count + 1);
  }

  function onMinus() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onMinus} className="minus">
          - Минус
        </button>
        <button onClick={onPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
