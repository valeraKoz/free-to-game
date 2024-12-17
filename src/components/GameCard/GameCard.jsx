import {GameImage} from "../../ui-kit/GameImage/GameImage.jsx";
import PropTypes from "prop-types";
import {GameTitle} from "../../ui-kit/GameTitle/GameTitle.jsx";
import {GameDescription} from "../../ui-kit/GameDescription/GameDescription.jsx";
import {Badge} from "../../ui-kit/Badge/Badge.jsx";
import {PlatformIcon} from "../../ui-kit/PlatformIcon/PlatformIcon.jsx";
import {GamePublisherFooterCard} from "../../ui-kit/GamePublisher/GamePublisherFooterCard.jsx";
import {Link} from "react-router";
import {useState} from "react";

export const GameCard = (props) => {
    const {game} = props;
    const [showVideo, setShowVideo] = useState(false);

    return (
        <Link to={`/game/${game.id}`}
              onMouseEnter={()=>{setShowVideo(true)}}
              onMouseLeave={()=>{setShowVideo(false)}}

              className="relative game-card cursor-pointer group/item active:scale-100 bg-neutral-800 overflow-hidden rounded shadow-md shadow-neutral-800 hover:scale-105 hover:shadow-2xl hover:shadow-neutral-800 transition-all duration-100">
                <GameImage key={game.id} id={game.id} name={game.title} showVideo={showVideo}/>
                <div className='game-card__info p-3 grow flex flex-col min-h-44'>
                    <GameTitle title={game.title}/>
                    <GameDescription description={game['short_description']}/>
                    <div className='game-card__footer grow flex items-end mt-5 justify-between'>
                        +
                        <div className='flex items-center justify-center gap-3'>
                            <Badge name={game.genre}/>
                            <PlatformIcon platform={game.platform}/>
                        </div>
                    </div>
                </div>
            <GamePublisherFooterCard publisher={game.publisher} releaseDate={game['release_date']}/>
        </Link>
    )
}

GameCard.propTypes = {
    game: PropTypes.object.isRequired
}



const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}