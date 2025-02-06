import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        padding: "10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ThemedButton;
