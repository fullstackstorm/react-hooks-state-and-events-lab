import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleModeToggle() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";
  const modeText = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeToggle}>{modeText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
