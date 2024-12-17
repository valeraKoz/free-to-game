import {NavLink} from "react-router";
import PropTypes from "prop-types";
import {CATEGORY_GAMES} from "../../settings/settings.js";

export const DropdownMenu = ({platform}) => {

    return (
        <ul className='dropdown-menu absolute group/edit invisible group-hover/item:visible top-14 rounded-lg bg-neutral-600 overflow-hidden left-0'>
            {
                Object.keys(CATEGORY_GAMES).map((key,index) => {
                    if(index<10)
                    return(<li className='dropdown-menu__item hover:bg-neutral-800' key={key}>
                        <NavLink className='block p-2 pl-5 pr-20 text-nowrap' to={`/filter?platform=${platform}&category=${key}`}>{CATEGORY_GAMES[key]}</NavLink>
                    </li>)
                })

            }
            <li className='dropdown-menu__item hover:bg-neutral-800'>
                <NavLink className='block p-2 pl-5 pr-20 border-t' to={`/filter?platform=${platform}`}>Все игры</NavLink>
            </li>
        </ul>
    )
}

DropdownMenu.propTypes = {
    platform: PropTypes.string.isRequired
}