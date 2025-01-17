import {FILTER} from "../../pages/FilterPage/utils/Filter.class.js";
import {FilterInput} from "./FilterInput.jsx";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
import {getParams} from "./utils.js";



export const PlatformForm = () => {
    const {search} = useLocation();
    const navigate = useNavigate();
    const {platform: platformFromURLParams} = getParams(search);
    const initialValue = FILTER.getPlatformDefaultValues()



    const {
        control,
        watch,
        reset,
    } = useForm({defaultValues: initialValue})


    useEffect(()=>{
        FILTER.setQueryParams({platform: platformFromURLParams,});
        platformFromURLParams && platformFromURLParams === 'all' ? reset({'pc':true, 'browser':true}) : reset({[platformFromURLParams]: true})
    }, [reset,platformFromURLParams]);


    return (
        <form
            onChange={() => FILTER.handleChangePlatform(watch(), navigate)}
            className='filter-section'>
            <h4 className='filter-section__title'>Platform</h4>
            <div className='filter-section__conteiners'>
                <FilterInput key={'pc'} control={control} name='pc'/>
                <FilterInput key={'browser'} control={control} name='browser'/>
            </div>
        </form>
    )
}