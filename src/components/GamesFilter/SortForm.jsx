import {useNavigate} from "react-router";
import {FILTER} from "../../pages/FilterPage/utils/Filter.class.js";
import {useRef, useState} from "react";

export const SortForm = ()=>{
    const navigate = useNavigate();
    const selectBodyRef = useRef(null);
    const selectTitleRef = useRef(null);
    const [selectValue, setSelectValue] = useState('popularity');

    const onClickSelectBody = (e)=>{
        const selectBody = e.target;
        const selectValue = selectBody.dataset.value;
        setSelectValue(selectValue);
        selectOpen(selectTitleRef, selectBodyRef);
        FILTER.handleChangeSortBy(selectValue, navigate)
    }

    return (
        <div className='filter-section'>
            <h4 className='filter-section__title'>Sort By</h4>
            <div className='select__container'>
                <div onClick={() => selectOpen(selectTitleRef,selectBodyRef)}
                     ref={selectTitleRef}
                     className='select__title pr-5 pl-5 p-1'
                >{selectOptions[selectValue]}
                </div>
                <div onClick={(e) => onClickSelectBody(e)}
                     ref={selectBodyRef}
                     className='select__body'>
                    {Object.keys(selectOptions).map((option, index) =>
                        <div className={`select__item p-1 ${selectValue === option ? 'bg-amber-600' : null}`}
                             key={index} data-value={option}>{selectOptions[option]}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

const selectOptions = {
    'release-date': 'Release Date',
    'popularity': 'Popularity',
    'alphabetical': 'Alphabetical',
    'relevance': 'Relevance',
}

const selectOpen = (titleRef, bodyRef)=>{
    titleRef.current.classList.toggle('active')
    const selectBody = bodyRef.current;
    if (selectBody.style.maxHeight) {
        selectBody.style.maxHeight = null;
    } else {
        selectBody.style.maxHeight = selectBody.scrollHeight + "px";
    }
    document.body.addEventListener('click',(e)=>{
        if(e.target.closest('.select__container') === null) selectOpen(titleRef,bodyRef);
    });
}