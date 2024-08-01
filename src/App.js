import { useEffect, useState } from "react";
import "./App.css";

const useDebounceText = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);
  return debouncedText;
};

function App() {
  const [textValue, setTextValue] = useState("");

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

  const debouncedTextValue = useDebounceText(textValue, 1000);

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(debouncedTextValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <h2>DeBounce Text: {debouncedTextValue}</h2>
      {filteredFruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}

export default App;
