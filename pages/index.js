import { useEffect, useState } from "react";
export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);
  return (
    <>
      <div className="container">
        <nav>
          <div className="mybrand">Next JS Dark Mode</div>
          <div>
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="heroSection">
            <h2>Hey I am Jalish Mahmud</h2>
            <h4>
              You can find me in{" "}
              <span>
                <a href="#">Linekdin </a>
              </span>
            </h4>
            <p>This is how to enable next JS dark mode</p>

            <button className="primary-btn">Connect with me</button>
          </div>
        </section>
      </div>
    </>
  );
}
