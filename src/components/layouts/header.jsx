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
            <div className={'flex justify-between align-middle gap-3'}>
                <input type="number" placeholder={'Waiting price'} className={'border p-2 rounded-md w-[70%]'}/>
                <div className={'dropdown bg-[#dfdfdf] w-[70px] h-[50px] rounded-md flex justify-center items-center'}>
                    <button onClick={openPopup} className={'font-bold text-black'}>Start</button>
                </div>
            </div>
        </div>
    )
}


