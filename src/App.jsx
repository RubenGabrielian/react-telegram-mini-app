import {useEffect, useState} from "react";
import "./App.css";
import Heading from "./components/home/heading.jsx";
import Header from "./components/layouts/header.jsx";
import Menu from "./components/layouts/menu.jsx";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import {TOKEN} from "./utilites.js";
import moment from "moment";


const headers = {
    'Cookie': 'BasketUID=7d1d84ce646443a68cc8b1d20a03b065; _wbauid=2370049161698607868; ___wbu=a1d901c1-2b1d-465e-976a-d7bc4d4c61cf.1698607914; external-locale=ru; _ym_uid=1701512770396261163; x-supplier-id-external=9bcb4c19-aa0a-4df3-88fe-b5d84876a479; wbx-validation-key=33c55bce-5eef-45b7-8cd7-341f9163711b; device_id_guru=18df96ef87c-462cd48b1299bb05; client_ip_guru=46.71.56.37; wb-pid=gYGC24wfcuFMnazCZkBykbBTAAABjubOoNJVJ8XbKMI6Q3chWEsPkC0oQvaTP0_Mfnk2GU7KqdbwmQ; _ym_d=1719048953; wb-id=gYHEgmdnEPVLDp5j0OdpwOdEAAABkTPWOn_fsrygEwXaqUqq1gLLGFx7Uz-HXL9lx42JbSZR3IzfyjE3NTZiYWZmLTgxNzktNDAyNC1hNzQzLTc0ZDVlZDdiYTAxNA; WBTokenV3=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ3ODEwNDEsInZlcnNpb24iOjIsInVzZXIiOiI0NzIwOTc4MCIsInNoYXJkX2tleSI6IjEiLCJjbGllbnRfaWQiOiJzZWxsZXItcG9ydGFsIiwic2Vzc2lvbl9pZCI6IjdhMGE0NTQyNzMwMjQ3NzBiZDc2ZmZlYmZiOWQ3OTYzIiwidXNlcl9yZWdpc3RyYXRpb25fZHQiOjE2MTEwMjg4NzYsInZhbGlkYXRpb25fa2V5IjoiN2Q4NzQ3MzdjZjM4ZjNjZGFlZDk3OTcwOGE1YjMwYjU5ZGE0MjlkNGFlZDUzZWNjY2Q3YzY4MDcwMTM4OWFjNSIsInBob25lIjoiIn0.dBHgOmlYK0O5H8SZJrMbOq3D5SEkZx5PwhitVtlmWl2-GiuIxfU6jhThSuadYoxM68LtiXWh-MVLy0HK0BIDuGKDzdCSeA40dNGpT-y7mtzK40Em8VmDBh6rpcID_S5SAON1q31VrQvdWWxBfTTkK-784c_XV1hlPxLwb0rARGsPzoG15-fUzOZ5pyZQQLbtjSK0zv6W-KJ4VTAhA2FQZCqkU4uWHHLsYVQ08SEB2gnT-zDvxnbMgQMoa-4NhpfxuI6eRXyL7IlXee_Qv00rdru5uDtzgmIRS6z02kb8JMWc-ioUokrYfGjcbv8xDa0xukFNGcdreBTOInkv0h5RQw; __zzatw-wb=MDA0dC0cTHtmcDhhDHEWTT17CT4VHThHKHIzd2UtQmcdaE5hHzVRP0FaW1Q4NmdBEXUmCQg3LGBwVxlRExpceEdXeiwbFnd0K08QDV5BSWllbQwtUlFRS19/Dg4/aU5ZQ11wS3E6EmBWGB5CWgtMeFtLKRZHGzJhXkZpdRVWOAsUQUZxdTA+ZR9jTmAfdRFUf1tPRjEpVVg7EmRDRF9vG3siXyoIJGM1Xz9EaVhTMCpYQXt1J3Z+KmUzPGwfZEdiJ0NeT3wpIg1pN2wXPHVlLwkxLGJ5MVIvE0tsP0caRFpbQDsyVghDQE1HFF9BWncyUlFRS2EQR0lrZU5TQixmG3EVTQgNND1aciIPWzklWAgSPwsmIBN8ayxXfxRdQEZtbxt/Nl0cOWMRCxl+OmNdRkc3FSR7dSYKCTU3YnAvTCB7SykWRxsyYV5GaXUVWDk+FUF0bnwmbB4dGERdU3lYSgktT0Z0JSgLDw9jREcmdzBEVxlRDxZhDhYYRRcje0I3Yhk4QhgvPV8/YngiD2lIYCFIVVYJJSITf2wmS3FPLH12X30beylOIA0lVBMhP05y50QVhw==; cfidsw-wb=yTHL30uT7rodcVGqVmaMopdNirv3mXRRNKNiRWqo1umfXn98giMPISyes8FpN22M8VLELsLamFCfkkr9GT6EgCx6jz3QzwQ/d/3Afor3xIg7tZwCDa4AHhh1x8tLqZLTNJ1f7TzX761HeE//j2NCSaP4Ylu6uB16ObD8nZd6Dg==', // Replace with your actual cookie
};

const data = {
    'Content-Type': 'application/json',
    "params": {
        "dateFrom": "2024-09-01T09:00:00.000Z",
        "dateTo": "2024-09-08T05:00:00.000Z",
        "preorderID": 27869748,
        "supplyId": null
    },
    "jsonrpc": "2.0",
    "id": "json-rpc_24"
};

const url = 'https://util.pinetech.org/public/api/ruben';

function App() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(WebApp?.initDataUnsafe?.user);

        axios.get(url).then((response) => {
            setData(response?.data?.result?.costs);
        })
    }, []);

    return (
        <div style={{maxHeight: `${WebApp.viewportHeight}px`}}>
            <Header/>
            <Heading/>
            <div className={'container mx-auto px-4'}>
                <div className="flex flex-wrap overflow-auto max-h-[70vh]">

                    {
                        data?.map((item) => {
                            const formattedDate = moment(item?.date).format('MMMM D, YYYY');
                            return (
                                <div className="item py-4 px-6 m-2 rounded-xl shadow w-full">
                                    <h3><strong>Date:</strong> {formattedDate}</h3>
                                    <h2><strong>Cost: {item?.cost / 40}</strong></h2>
                                </div>)
                        })
                    }
                </div>

            </div>
            <Menu/>
        </div>
    );
}

export default App;
