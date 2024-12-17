import { IoBrowsers } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";
import PropTypes from "prop-types";


const PLATFORM_ICON = {
    'PC (Windows)': <PiDesktopTowerFill/>,
    'Web Browser': <IoBrowsers/>
}

export const PlatformIcon = (props) => {
    const {platform} = props;
    const render = platform => platform.split(',').map((platform, index)=><span className='text-neutral-500' key={index}>{PLATFORM_ICON[platform.trim()]}</span>)
    return <div className='flex gap-1'>{render(platform)}</div>


}


PlatformIcon.propTypes = {
    platform: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}