import { useEffect } from "react";

function ToggleMode() {
  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  const toggleMode = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  };

  return (
    <button id="toggle-mode" onClick={toggleMode}>
      <i className="bx bx-moon"></i>
    </button>
  );
}

export default ToggleMode;