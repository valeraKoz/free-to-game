import './index.css'
import {GamesFilter} from "../../components/GamesFilter/GamesFilter.jsx";
import {FilteredGames} from "../../components/FilteredGames/FilteredGames.jsx";
import {PageContainer} from "../../ui-kit/PageContainer/PageContainer.jsx";





export const FilterPage = () => {
    return (
        <PageContainer>
            <div className='filter-page__wrapper page-wrapper xl:grid xl:grid-cols-[300px_minmax(700px,_1fr)] xl:gap-4'>
                <GamesFilter/>
                <FilteredGames/>
            </div>
        </PageContainer>
    )
}


