import './index.css'
import {NavLink} from "react-router";
import {routesPath} from "../../utils/routes.path.js";
import {Navigation} from "../Navigation/index.jsx";

export const Header = () => {


    return (
        <header className='header fixed left-0 right-0 top-0 bg-neutral-700 shadow-lg z-10'>
            <div className='container pl-4 pr-4 lg:mx-auto xl:max-w-6xl lg:max-w-4xl h-20 flex justify-between content-center'>
                <div className='header__logo flex flex-col justify-center'>
                    <NavLink to={routesPath.MAIN} className='hover:text-amber-500'>Free-To-Game</NavLink>
                </div>
                <div className='header__main flex flex-col justify-center'>
                    <Navigation/>
                </div>
            </div>
        </header>
    )
}