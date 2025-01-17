import {useLocation} from "react-router";
import {useGetFilteredGamesQuery} from "../../api/endpoints.js";
import {RenderFilteredGames} from "./RenderFilteredGames.jsx";
import {skeleton} from "../../pages/FilterPage/utils/utils.jsx";
import {FilteredGameWrapper} from "./FilteredGameWrapper.jsx";

export const FilteredGames = () => {
    const {search} = useLocation();
    const {isLoading, data} = useGetFilteredGamesQuery(search);



    return (
        <div className='filter-page__cards p-4  h-max'>
            { isLoading
                ? <FilteredGameWrapper> {skeleton()} </FilteredGameWrapper>
                : <RenderFilteredGames data={data} isLoading={isLoading}/>
            }
        </div>

    )
}

