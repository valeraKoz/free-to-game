import {useState} from "react";

export const GamePageDescription = (props) => {
    const {description, shortDescription} = props;
    const [showMore, setShowMore] = useState(false);



    return (
        <div className='game-page__description'>
            <span className='text-xs'>{shortDescription}</span>
            {description &&
                <div className={`transition-all duration-700 text-xs overflow-hidden ${showMore ? 'max-h-screen' : 'max-h-0'}`}>
                    {description}
                </div>}
            <div className='pt-1 text-neutral-500 cursor-pointer'
                 onClick={()=>{setShowMore(!showMore)}}
            >{showMore ? 'Спрятать' : 'Показать больше'}</div>
        </div>
    )
}