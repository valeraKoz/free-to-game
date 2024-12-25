import {skeleton} from "../../pages/FilterPage/utils/utils.jsx";
import {GameCard} from "../GameCard/GameCard.jsx";
import {useLocation} from "react-router";
import {useGetFilteredGamesQuery} from "../../api/endpoints.js";

export const FilteredGames = () => {
    const {search} = useLocation();
    const {isLoading, data} = useGetFilteredGamesQuery(search)
    return (
        <div className='filter-page__cards grid grid-cols-3 gap-4 h-max'>
            {isLoading ? skeleton() : data.map(game => <GameCard game={game} key={game.id}/>)}
        </div>
    )
}