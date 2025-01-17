import './index.css'
import {NavLink} from "react-router";
import {routesPath} from "../../utils/routes.path.js";
import {DropdownMenu} from "./DropdownMenu.jsx";
import { IoMdArrowDropdown } from "react-icons/io";
import {MobileBurgerMenu} from "./MobileBurgerMenu.jsx";

export const Navigation = ()=>{

    return (
        <>
        <nav className='navigation hidden xl:flex'>
            <li className="nav-item xl:hover:bg-neutral-800 rounded-lg cursor-pointer xl:transition-all xl:duration-100">
                <NavLink to={routesPath.MAIN} className='nav-link'>Main Page</NavLink>
            </li>
            <li className="nav-item relative group/item xl:hover:bg-neutral-800 rounded-lg cursor-pointer xl:transition-all xl:duration-100">
                <NavLink to={'filter?platform=pc'} className='nav-link flex items-center'>
                    PC Games
                    <IoMdArrowDropdown className='xl:group-hover/item:-rotate-90 transition-rotate xl:duration-100'/>
                </NavLink>
                <DropdownMenu platform='pc'/>
            </li>
            <li className="nav-item relative group/item xl:hover:bg-neutral-800 rounded-lg cursor-pointer xl:transition-all xl:duration-100">
                <NavLink to={'filter?platform=browser'} className='nav-link flex items-center'>
                    Browser Games
                    <IoMdArrowDropdown className='xl:group-hover/item:-rotate-90 xl:transition-rotate xl:duration-100'/>
                </NavLink>
                <DropdownMenu platform='browser'/>
            </li>
        </nav>
            <MobileBurgerMenu/>
        </>
    )
}


