import {useState} from "react";
import "./App.css";
import Heading from "./components/home/heading.jsx";
import Header from "./components/layouts/header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Header/>
     <Heading/>
    </div>
  );
}

export default App;
