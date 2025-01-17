import {CATEGORY_GAMES} from "../../settings/settings.js";
import {NavLink} from "react-router";

export const MobileDropdownMenu = ({platform})=>{
    return (
        <div className="grid grid-cols-2 gap-2 mt-4">
            {
                Object.keys(CATEGORY_GAMES).map((category,index) => {
                    if(index<10)
                        return(<li className='mobile-dropdown-menu__item list-none p-2 border' key={category}>
                            <NavLink
                                className='block text-nowrap '
                                to={`/filter?platform=${platform}&tag=${category}`}
                            >
                                {CATEGORY_GAMES[category]}
                            </NavLink>
                        </li>)
                })

            }
        </div>
    )
}