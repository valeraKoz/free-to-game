import './index.css'
import {TagForm} from "./TagForm.jsx";
import {PlatformForm} from "./PlatformForm.jsx";
import {SortForm} from "./SortForm.jsx";

import { IoOptions } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

import {useState} from "react";

export const GamesFilter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="games-filter">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='xl:hidden flex p-4 items-center gap-1 justify-end cursor-pointer'>
                Filters
                <IoOptions size={22}/>
            </div>
            <div className="games-filter-form">
                <SortForm/>
                <PlatformForm/>
                <TagForm/>
            </div>
            <div className={`flex w-full p-2 flex-col gap-2 fixed z-10 bg-neutral-700 top-0 transition-all duration-500 h-screen ${isOpen ?null : 'translate-x-full'}`}>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='filter-title flex items-center gap-2 p-4 text-xl'>
                    <FaLongArrowAltLeft/>
                    Filter
                </div>
                <SortForm/>
                <PlatformForm/>
                <TagForm styles={{
                    wrapper: 'h-auto overflow-hidden',
                    list: 'h-[80%] overflow-y-auto'
                }}/>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='bg-amber-600 w-full p-6'>
                    Apply
                </button>
            </div>
        </div>
    )
}


