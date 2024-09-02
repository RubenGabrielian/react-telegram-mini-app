import WebApp from "@twa-dev/sdk";

export default function Header () {

    const openPopup = () => {
        WebApp?.showPopup({
            title: 'Modal Title',
            message: 'This is the content of the modal.',
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
    };

    return (
        <div className={'container mx-auto px-4 pt-6 border-b border-gray-200 py-5'}>
            <h2 className={'font-bold text-2xl mb-3'}>Напишите цену, ниже которой вас ждет</h2>
            <div className={'flex justify-between align-middle gap-3'}>
                <input type="number" placeholder={'₽ Цена/ед.'} className={'border p-2 rounded-md w-[70%] outline-0'}/>
                <div className={'dropdown bg-[#dfdfdf] w-[70px] h-[50px] rounded-md flex justify-center items-center'}>
                    <button onClick={openPopup} className={'font-bold text-black outline-0'}>Начать</button>
                </div>
            </div>
        </div>
    )
}


