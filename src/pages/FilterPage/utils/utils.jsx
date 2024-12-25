import {GameCardSkeleton} from "../../../components/GameCard/GameCardSkeleton/GameCardSkeleton.jsx";

export const skeleton = ()=> {
    const tempArr = [];
    for (let i = 0; i < 30; i++) {
        tempArr.push(<GameCardSkeleton key={i}/>);
    } return tempArr;
}