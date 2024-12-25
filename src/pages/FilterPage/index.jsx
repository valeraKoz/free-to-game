import './index.css'
import {GamesFilter} from "../../components/GamesFilter/GamesFilter.jsx";
import {FilteredGames} from "../../components/FilteredGames/FilteredGames.jsx";





export const FilterPage = () => {

    return (
        <div className='filter-page__wrapper page-wrapper grid grid-cols-[300px_minmax(700px,_1fr)] gap-4'>
            <GamesFilter/>
            <FilteredGames/>
        </div>
    )
}


