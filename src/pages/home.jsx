import ChooseWarehouse from "../components/warehouses/index.jsx";
import {useEffect, useState} from "react";
import WebApp from "@twa-dev/sdk";

export default function Home() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(WebApp?.initDataUnsafe?.user);

        // axios.get(url).then((response) => {
        //     setData(response?.data?.result?.costs);
        // })
    }, []);


    return (
        <>
            ruben
            {/*<ChooseWarehouse/>*/}
        </>
    )
}
