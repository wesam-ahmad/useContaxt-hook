import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemedButton from "./Button";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh", padding: "20px" }}>
        <h1>Current Theme: {theme}</h1>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
