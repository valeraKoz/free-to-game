import './index.css'
import {NavLink} from "react-router";
import {routesPath} from "../../utils/routes.path.js";
import {DropdownMenu} from "./DropdownMenu.jsx";
import { IoMdArrowDropdown } from "react-icons/io";

export const Navigation = ()=>{

    return (
        <>
        <nav className='navigation flex'>
            <li className="nav-item hover:bg-neutral-800 rounded-lg cursor-pointer transition-all duration-100">
                <NavLink to={routesPath.MAIN} className='nav-link'>Главная</NavLink>
            </li>
            <li className="nav-item relative group/item hover:bg-neutral-800 rounded-lg cursor-pointer transition-all duration-100">
                <NavLink to={'filter?platform=pc'} className='nav-link flex items-center'>
                    ПК игры
                    <IoMdArrowDropdown className='group-hover/item:-rotate-90 transition-rotate duration-100'/>
                </NavLink>
                <DropdownMenu platform='pc'/>
            </li>
            <li className="nav-item relative group/item hover:bg-neutral-800 rounded-lg cursor-pointer transition-all duration-100">
                <NavLink to={'filter?platform=browser'} className='nav-link flex items-center'>
                    Браузерные игры
                    <IoMdArrowDropdown className='group-hover/item:-rotate-90 transition-rotate duration-100'/>
                </NavLink>
                <DropdownMenu platform='browser'/>
            </li>
        </nav>
        </>
    )
}


