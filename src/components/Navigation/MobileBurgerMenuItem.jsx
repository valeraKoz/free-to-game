import {MobileDropdownMenu} from "./MobileDropdownMenu.jsx";
import {useRef} from "react";
import PropTypes from "prop-types";

export const MobileBurgerMenuItem = ({platform,toogleMenu})=>{
    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    return (
        <div
            onClick={() => selectOpen(titleRef, bodyRef)}
            className="burger-menu__item border text-center p-4 ">
            <div
                ref={titleRef}
                className='burger-menu__title'>{platform.toUpperCase() + ' ' + 'Games'}
            </div>
            <div
                onClick={()=>{toogleMenu()}}
                ref={bodyRef}
                 className='max-h-0 overflow-hidden transition-all duration-500'>
                <MobileDropdownMenu platform={platform}/>
            </div>
        </div>
    )
}

MobileBurgerMenuItem.propTypes = {
    platform: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    toogleMenu: PropTypes.func.isRequired
}


const selectOpen = (titleRef, bodyRef)=>{
    titleRef.current.classList.toggle('active')
    const selectBody = bodyRef.current;
    if (selectBody.style.maxHeight) {
        selectBody.style.maxHeight = null;
    } else {
        selectBody.style.maxHeight = selectBody.scrollHeight + "px";
    }
    document.body.addEventListener('click',(e)=>{
        if(e.target.closest('.burger-menu__item') === null) selectOpen(titleRef,bodyRef);
    });
}