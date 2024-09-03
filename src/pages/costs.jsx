import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../utilites.js";
import Loading from "../components/loading.jsx";
import moment from "moment";
import WebApp from "@twa-dev/sdk";

export default function Costs() {

    const [costs, setCosts] = useState([]);
    const [isShowInput, setIsShowInput] = useState(false);
    const [cost, setCost] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const handleEnterInput = (e) => {
        if(cost) {
            WebApp?.showPopup({
                title: 'Спасибо',
                message: 'Ваша ставка принята, мы свяжемся с вами и отправим вам сообщение, если цена окажется ниже любой из ваших ставок.',
                buttons: [
                    { type: 'ok', text: 'OK' },
                    { type: 'cancel', text: 'Cancel' }
                ]
            }).then(result => {
                if (result.button_id === 'ok') {
                    console.log('User clicked OK');
                } else if (result.button_id === 'cancel') {
                    console.log('User clicked Cancel');
                }
            });
        }

    }


    useEffect(() => {
        if (id) {
            axios.get(`${API}/get-costs?id=${id}`).then((response) => {
                setCosts(response.data.result?.costs);
            })
        }
    }, []);


    return (
        <div>
            <div className={'container mx-auto px-4  overflow-auto max-h-[70vh]'}>
                <div className="flex justify-between items-center">
                    <Link to={'/'}
                          className={'inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-4'}>Назад</Link>
                    <button
                        onClick={() => setIsShowInput(!isShowInput)}
                        className={'inline-block bg-red-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 mt-4'}>Следите
                        за ценой
                    </button>
                </div>
                {
                    isShowInput ? (
                        <div className={'mt-4'}>
                            <label htmlFor="" className={'mb-3 block'}>Напишите цену, ниже которой вы ожидаете</label>
                            <input type="number" placeholder={'30'}
                                   value={cost}
                                   inputMode={'numeric'}
                                   onChange={(e) => setCost(e.target.value)}
                                   className={'w-full rounded-md border border-amber-50 outline-0 p-3'}/>
                            <button
                                onClick={handleEnterInput}
                                className={'inline-block bg-red-200 border border-red-700 text-red-950 px-4 py-2 rounded  mt-4'}>Ждать
                            </button>
                        </div>
                    ) : null
                }
                <div className="grid grid-cols-2 gap-4 mt-5">
                    {
                        costs?.length ? costs?.map((item) => {
                            const formattedDate = moment(item?.date).format('MMMM D, YYYY');
                            return (
                                <div className="item py-4 px-6 m-2 rounded-xl shadow  bg-white">
                                    <h3>{formattedDate}</h3>
                                    <h2><strong>шт.</strong>{item?.cost / 40} ₽</h2>
                                </div>)
                        }) : <Loading/>
                    }
                </div>
            </div>
        </div>
    )
}
