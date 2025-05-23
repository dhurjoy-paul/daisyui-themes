import { useEffect, useState } from "react";
import ThemePreview from "./ThemePreview";

const themes = [
  "lightFood", "darkFood", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
  "nord", "sunset", "caramellatte", "abyss", "silk"
];

const App = () => {
  const [theme, setTheme] = useState("lightFood");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen p-4 bg-base-100 text-base-content">
      <div className="flex justify-center mb-6">
        <select
          className="select select-bordered w-full max-w-xs"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <ThemePreview />
    </div>
  );
};

export default App;
