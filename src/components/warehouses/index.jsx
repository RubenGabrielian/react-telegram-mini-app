import warehouseIcon from "../../assets/warehouse.png";
import AcceptIcon from "../../assets/accept.png";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../utilites.js";
import Loading from "../loading.jsx";


export default function ChooseWarehouse() {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get(`${API}/get-warehouses`).then((response) => {
            setWarehouses(response.data)
        })
    }, []);


    const handleChange = (id) => {
        const newWarehouses = warehouses?.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    selected: true
                }
            } else {
               return  {
                   ...item,
                   selected: false
               }
            }
        })
        setWarehouses(newWarehouses)
    }


    useEffect(() => {
        console.log(warehouses)
    }, [warehouses]);



    return (
        <div className={'container mx-auto px-4 mt-10'}>
            <h2 className={'text-2xl'}>Выберите склад</h2>
            <div className={'flex items-center flex-wrap mt-5 gap-3  justify-between'}>
                {
                    warehouses?.length ? (
                        warehouses?.map((item, i) => (
                            <div className={'border border-gray-300 p-3 rounded-md bg-white w-[48%] relative'} key={i}
                                 onClick={() => handleChange(item.id)}>
                                <img src={warehouseIcon} className={`w-[100px] mx-auto ${item?.selected && 'p-2'}`} alt=""/>
                                <h3 className={'text-xl font-bold pt-2 text-center'}>{item?.name}</h3>
                                {item?.selected ?
                                    <img src={AcceptIcon} className={'absolute top-[10px] right-[10px]'} alt=""/> : null}
                            </div>
                        ))
                    ) : <Loading/>
                }
            </div>
            {warehouses?.length ?
                <button className={'mt-10 w-full bg-amber-200 text-black outline-0 font-bold'}>Вперед</button> : null}
        </div>
    )
}
