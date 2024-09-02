import WebApp from "@twa-dev/sdk";
import {useEffect, useState} from "react";

export default function Heading () {
    const [user, setUser] = useState(null);


    useEffect(() => {
        setUser(WebApp?.initDataUnsafe?.user);
    }, []);


    return (
        <header className={'pt-5 px-4'}>
            <h2 className={'text-2xl'}>Hello <span className={'font-bold'}>{user ? user?.first_name || 'loading...'}</span></h2>
            <h3 className={'text-7xl font-black pt-5'}>Ready to workout</h3>
        </header>
    )
}
