import './index.css'
import {useLocation} from "react-router";
import { useGetGamesByParamsQuery} from "../../api/endpoints.js";
import {GameCard} from "../../components/GameCard/GameCard.jsx";
import {GameCardSkeleton} from "../../components/GameCard/GameCardSkeleton/GameCardSkeleton.jsx";



const skeleton = ()=> {
    const tempArr = [];
    for (let i = 0; i < 30; i++) { tempArr.push(<GameCardSkeleton key={i}/>)} return tempArr;
}

export const FilterPage = () => {
    const {search} = useLocation();
    const {isLoading, data} = useGetGamesByParamsQuery(search);

    return (
        <div className='filter-page__wrapper page-wrapper'>
            <div className='filter-page__cards grid grid-cols-4 gap-4'>
                {isLoading ? skeleton() : data.map(game => <GameCard game={game} key={game.id}/>)}
            </div>
        </div>
    )
}


