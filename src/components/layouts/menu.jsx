import homeIcon from "../../assets/home.png";
import listIcon from "../../assets/list.png";
import profileIcon from "../../assets/user.png";

export default function Menu () {
    return (
        <div className={'container mx-auto px-4 absolute bottom-0 pt-4 pb-7 items-center shadow-3xl'}>
            <ul className={'list-none flex justify-between'}>
                <li>
                    <a href="" className={'flex flex-col items-center decoration-0 text-black'}>
                        <img src={homeIcon} alt=""/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="" className={'flex flex-col items-center decoration-0 text-black'}>
                        <img src={listIcon} alt=""/>
                        <span>Trainings</span>
                    </a>
                </li>
                <li>
                    <a href="" className={'flex flex-col items-center decoration-0 text-black'}>
                        <img src={profileIcon} alt=""/>
                        <span>Profile</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
