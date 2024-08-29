export default function Header () {
    return (
        <div className={'container mx-auto px-4 pt-6 border-b border-gray-200 py-5'}>
            <div className={'flex justify-between align-middle'}>
                <div className={'dropdown bg-[#dfdfdf] w-[70px] h-[50px] rounded-xl flex justify-center items-center'}>
                    <span className={'font-bold text-black'}>Logo</span>
                </div>
                <div>
                    <img className={'rounded-full w-[50px] h-[50px] object-cover'} src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2193" alt=""/>
                </div>
            </div>
        </div>
    )
}


