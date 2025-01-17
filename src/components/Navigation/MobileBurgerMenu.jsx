import {IoMenu} from "react-icons/io5";
import {useRef, useState} from "react";
import {routesPath} from "../../utils/routes.path.js";
import {NavLink} from "react-router";
import {MobileBurgerMenuItem} from "./MobileBurgerMenuItem.jsx";
import './index.css'

export const MobileBurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const burgerButtonRef = useRef(null);
    const burgerMenuRef = useRef(null);

    const toogleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <nav

            className='navigation-mobile block xl:hidden'>
            <div
                onClick={() => {
                    toogleMenu()
                }}
                ref={burgerButtonRef}
                className="burger-button relative">
                <div className={`hamburger ${isOpen ? 'active' : null}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <div
                ref={burgerMenuRef}
                className={`burger-menu absolute top-20 left-0 bg-neutral-800 w-full ${isOpen? 'h-screen' : 'h-0'} overflow-hidden max-h-screen transition-all duration-500`}>
                <div className='burger-menu__items p-4 flex flex-col gap-2'>
                    <div className="burger-menu__item border text-center p-4" onClick={()=>{toogleMenu()}}>
                        <NavLink to={routesPath.MAIN}>Main Page</NavLink>
                    </div>
                    <MobileBurgerMenuItem platform='pc' toogleMenu={toogleMenu}/>
                    <MobileBurgerMenuItem platform='browser' toogleMenu={toogleMenu}/>
                </div>
            </div>
        </nav>
    )
}

