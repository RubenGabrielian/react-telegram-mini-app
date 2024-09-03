import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../utilites.js";
import Loading from "../components/loading.jsx";
import moment from "moment";

export default function Costs () {

    const [costs, setCosts] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');



    useEffect(() => {
        if(id) {
            axios.get(`${API}/get-costs?id=${id}`).then((response) => {
                setCosts(response.data.result?.costs);
            })
        }
    }, []);


    return (
        <div>
            <div className={'container mx-auto px-4  overflow-auto max-h-[70vh]'}>
                <Link to={'/'} className={'inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-4'}>Назад</Link>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    {
                        costs?.length ? costs?.map((item) => {
                            const formattedDate = moment(item?.date).format('MMMM D, YYYY');
                            return (
                                <div className="item py-4 px-6 m-2 rounded-xl shadow  bg-white">
                                    <h3><strong>Date:</strong> {formattedDate}</h3>
                                    <h2><strong>Cost: {item?.cost / 40}</strong></h2>
                                </div>)
                        }) : <Loading/>
                    }
                </div>
            </div>
        </div>
    )
}
