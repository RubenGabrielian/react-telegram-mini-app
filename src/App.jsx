import "./App.css";
import Header from "./components/layouts/header.jsx";
import WebApp from "@twa-dev/sdk";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Costs from "./pages/costs.jsx";

const url = 'https://util.pinetech.org/public/api/ruben';

function App() {

    // useEffect(() => {
    //     axios.post(`${API}/init-user`,{user: WebApp?.initDataUnsafe?.user}).then((res) => {
    //         console.log(res.data);
    //     })
    //
    // }, []);

    return (
        <div style={{maxHeight: `${WebApp.viewportHeight}px`}}>
            {/*<Header/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/costs" element={<Costs/>}/>
            </Routes>
        </div>
    );
}

export default App;
