import {GameImage} from "../GameImage/GameImage.jsx";
import PropTypes from "prop-types";

export const GamePageScreenshot = (props) => {
    const {screenshots} = props;
    console.log(screenshots)
    return (
        <section className="game-page-screenshot">
            <h2 className='text-2xl font-bold'>Screenshots</h2>
            <div className='flex gap-2 mt-3'>
                {screenshots.map((screenshot, index)=>(
                        <GameImage key={index} imgUrl={screenshot.image}/>
                ))}
            </div>
        </section>
    )
}

GamePageScreenshot.propTypes = {
    screenshots: PropTypes.array,
}