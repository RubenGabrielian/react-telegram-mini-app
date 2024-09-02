import {useEffect, useState} from "react";
import "./App.css";
import Heading from "./components/home/heading.jsx";
import Header from "./components/layouts/header.jsx";
import Menu from "./components/layouts/menu.jsx";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import {TOKEN} from "./utilites.js";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(WebApp?.WebAppUser);

        axios.post('https://seller-supply.wildberries.ru/ns/sm-supply/supply-manager/api/v1/supply/getAcceptanceCosts', {
            "params": {
                "dateFrom": "2024-09-02T05:03:04.887Z",
                "dateTo": "2024-10-01T20:00:00.000Z",
                "preorderID": 27933607,
                "supplyId": null
            },
            "jsonrpc": "2.0",
            "id": "json-rpc_83",
        }, {
            headers: { Cookies: `${TOKEN}` }
        }).then((response) => {
            console.log(response);
        })
    }, []);

    return (
        <div style={{maxHeight: `${WebApp.viewportHeight}px`}}>
            <Header/>
            <Heading/>
            <Menu/>
        </div>
    );
}

export default App;
