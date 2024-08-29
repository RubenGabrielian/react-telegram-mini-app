import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WebApp from "@twa-dev/sdk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Սա պարապողների համար ամենալավ էփն է լինելու</h2>
      <div className="card">
        <div className="card">
          <button
            onClick={() =>
              WebApp.showPopup({
                title: "Hello Ruben",
                message: "lorem lorem lorem",
                buttons: [
                  { type: "close", text: "close" },
                  { type: "destructive", text: "delete" },
                  { type: "ok", text: "OK" },
                ],
              })
            }
          >
            Show Alert
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
