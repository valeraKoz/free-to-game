import './index.css'
import {Badge} from "../../ui-kit/Badge/Badge.jsx";
import {GameCardSkeleton} from "../../components/GameCard/GameCardSkeleton/GameCardSkeleton.jsx";


export const MainPage = () => {
    return(
        <div className='main-page__wrapper page__wrapper'>
            <p>MAIN PAGE</p>
            <Badge name={'strategy'}/>

            <div className='grid grid-cols-4 gap-4'>
                <GameCardSkeleton/>
                <GameCardSkeleton/>
                <GameCardSkeleton/>
                <GameCardSkeleton/>
            </div>
        </div>
    )
}