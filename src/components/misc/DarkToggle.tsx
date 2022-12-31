import { useEffect, useState } from "react";

const DarkToggle = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") ?? "dark");
    const handleClick = () => {
        setDarkMode(darkMode === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (darkMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", darkMode);
      }, [darkMode]);
    
  return (
    <button onClick={handleClick}>{darkMode === "light" ? "🌙" : "🌞"}</button>
  );
}

export default DarkToggle