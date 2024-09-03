import warehouseIcon from "../../assets/warehouse.png";
import AcceptIcon from "../../assets/accept.png";

export default function ChooseWarehouse () {
    return (
        <div className={'container mx-auto px-4 mt-10'}>
            <h2 className={'text-2xl'}>Выберите склад</h2>
            <div className={'flex items-center flex-wrap mt-5 gap-3  justify-between'}>
                <div className={'border border-gray-300 p-3 rounded-md bg-white w-[48%] relative'}>
                    <img src={warehouseIcon} className={'w-[100px] mx-auto'} alt=""/>
                    <h3 className={'text-xl font-bold pt-2 text-center'}>Коледино</h3>
                    <img src={AcceptIcon} className={'absolute top-[10px] right-[10px]'} alt=""/>
                </div>
                <div className={'border border-gray-300 p-3 rounded-md bg-white w-[48%] relative'}>
                    <img src={warehouseIcon} className={'w-[100px] mx-auto'} alt=""/>
                    <h3 className={'text-xl font-bold pt-2 text-center'}>Подольск</h3>
                    <img src={AcceptIcon} className={'absolute top-[10px] right-[10px]'} alt=""/>
                </div>
                <div className={'border border-gray-300 p-3 rounded-md bg-white w-[48%] relative'}>
                    <img src={warehouseIcon} className={'w-[100px] mx-auto'} alt=""/>
                    <h3 className={'text-xl font-bold pt-2 text-center'}>Климовск</h3>
                    <img src={AcceptIcon} className={'absolute top-[10px] right-[10px]'} alt=""/>
                </div>
            </div>
            <button className={'mt-32 w-full bg-amber-200 text-black outline-0 font-bold'}>Вперед</button>
        </div>
    )
}
