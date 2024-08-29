import {useState} from "react";
import "./App.css";
import Heading from "./components/home/heading.jsx";
import Header from "./components/layouts/header.jsx";
import Menu from "./components/layouts/menu.jsx";
import WebApp from "@twa-dev/sdk";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{maxHeight: `${WebApp.viewportHeight}px`}}>
            <Header/>
            <Heading/>
            <Menu/>
        </div>
    );
}

export default App;
