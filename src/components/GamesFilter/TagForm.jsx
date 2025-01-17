import {FILTER} from "../../pages/FilterPage/utils/Filter.class.js";
import {FilterInput} from "./FilterInput.jsx";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import {getParams} from "./utils.js";
import './index.css'

export const TagForm = ({styles}) => {
    const navigate = useNavigate();
    const {search} = useLocation();
    const {tag: tagFromURLParams} = getParams(search);
    const initialValue = FILTER.getTagDefaultValues();
    const {
        control ,
        watch ,
        reset
    } = useForm({defaultValues: initialValue})

    useEffect(()=>{
        FILTER.setQueryParams({tag: tagFromURLParams});
        tagFromURLParams && reset(tagFromURLParams.split('.').reduce((acc,curr)=>(acc[curr] = true, acc), {}))
    },[reset,tagFromURLParams])

    return (
        <form
            onChange={() => FILTER.handleChangeTag(watch(), navigate)}
            className={`filter-section ${styles && styles.wrapper}`}>
            <h4 className='filter-section__title'>Genre</h4>
            <div className={`filter-section__conteiners ${styles && styles.list}`}>
                {renderTagForm(initialValue,control,watch)}
            </div>
        </form>
    )
}




const renderTagForm = (tagDefaultValue,tagControl,tagWatch) => {
    return Object.keys(tagDefaultValue)
        .sort() //- отсортировал по алфавиту
        .sort((a) =>
            tagWatch()[a] === undefined ? 0: tagWatch()[a]? -1 : 1
        )
        .map((category) =>
            <FilterInput key={category} control={tagControl} name={category}/>
        )
}