import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const fruits = [
    "Apples",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  const [inputValue, setInputValue] = useState("");

  const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(inputValue.toLowerCase()))

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {filteredFruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}

export default App;
