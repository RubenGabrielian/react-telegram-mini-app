export default function Header () {
    return (
        <div className={'container mx-auto p-4'}>
            <div className={'flex justify-between align-middle'}>
                <div className={'dropdown bg-[grey] w-[50px] h-[40px] rounded-xl flex justify-center items-center'}>
                    <span className={'font-bold text-white'}>⋮</span>
                </div>
                <div>
                    <img className={'rounded-full w-[50px] h-[50px] object-cover'} src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2193" alt=""/>
                </div>
            </div>
        </div>
    )
}
