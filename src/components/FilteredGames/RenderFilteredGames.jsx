import {GameCard} from "../GameCard/GameCard.jsx";
import {skeleton} from "../../pages/FilterPage/utils/utils.jsx";
import {createRef, useEffect, useRef, useState} from "react";
import {FilteredGameWrapper} from "./FilteredGameWrapper.jsx";
import PropTypes from "prop-types";

export const RenderFilteredGames = ({data, isLoading}) => {
    const lastItem = createRef();
    const DATA_PER_PAGE = 12;
    const DATA_LENGTH = data.length;
    const [dataItems, setDataItems] = useState([]);
    const [loadedCount, setLoadedCount] = useState(DATA_PER_PAGE);

    useEffect(() => {
        setDataItems(dataInitialState(data, DATA_PER_PAGE))
    },[data])

    const showMore = () => {
        if (DATA_LENGTH > loadedCount){
            setDataItems(prevState => [...prevState, ...data.slice(loadedCount, loadedCount + DATA_PER_PAGE)]);
            setLoadedCount(prevState => prevState + DATA_PER_PAGE);
        }
    }
    const actionInSight = (entries) => {
        if (entries[0].isIntersecting && DATA_LENGTH > loadedCount) {
            showMore();
        }
    };

    //константа для хранения идентификатора наблюдателя
    const observerLoader = useRef();

//действия при изменении последнего элемента списка
    useEffect(() => {
        //удаляем старый объект наблюдателя
        if (observerLoader.current) {
            observerLoader.current.disconnect();
        }

        //создаём новый объект наблюдателя
        observerLoader.current = new IntersectionObserver(actionInSight);

        //вешаем наблюдателя на новый последний элемент
        if (lastItem.current) {
            observerLoader.current.observe(lastItem.current);
        }
    }, [lastItem]);


    return (
        <>
        <FilteredGameWrapper>
            {
                isLoading
                    ? skeleton()
                    : data.status !== 0
                        ? dataItems.map((game,index) => {
                            if(index + 1 === dataItems.length){
                                return <GameCard ref={lastItem} game={game} key={game.id}/>
                            } else{
                                return <GameCard game={game} key={game.id}/>
                            }
                        })
                        : 'Games not found in this genre'
            }
        </FilteredGameWrapper>
        </>
    )
}

const dataInitialState = (data, perPage) => {
    if (data.status === 0) return null
    return data.slice(0, perPage)
}

RenderFilteredGames.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
}