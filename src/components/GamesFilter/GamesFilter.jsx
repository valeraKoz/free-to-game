import './index.css'
import {useForm} from "react-hook-form";
import {FilterInput} from "./FilterInput.jsx";
import {FILTER} from "../../pages/FilterPage/utils/Filter.class.js";
import {useLocation, useNavigate} from "react-router";
import {getParams} from "./utils.js";
import {useEffect} from "react";

export const GamesFilter = () => {
    console.log('RENDER')
    const {search} = useLocation();
    const navigate = useNavigate();

    const {platform: platformFromURLParams, tag: tagFromURLParams} = getParams(search);
    FILTER.setQueryParams({
        platform: platformFromURLParams,
        tag: tagFromURLParams,
    });
    const {
        control: platformControl ,
        watch: platformWatch,
        reset: platformReset
    } = useForm({defaultValues: FILTER.getPlatformDefaultValues()})
    const {
        control: tagControl,
        watch : tagWatch,
        reset: tagReset
    } = useForm({defaultValues: FILTER.getTagDefaultValues()})

    useEffect(()=>{
        platformFromURLParams && platformFromURLParams === 'all' ? platformReset({'pc':true, 'browser':true}) : platformReset({[platformFromURLParams]: true})
        tagFromURLParams && tagReset(tagFromURLParams.split('.').reduce((acc,curr)=>(acc[curr] = true, acc), {}))
    }, [platformFromURLParams, tagFromURLParams]);

    const renderTagForm = (tagDefaultValue) => {
        return Object.keys(tagDefaultValue)
            .sort() //- отсортировал по алфавиту
            .sort((a) =>
                tagWatch()[a] === undefined ? 0: tagWatch()[a]? -1 : 1
            )
            .map((category) =>
                <FilterInput key={category} control={tagControl} name={category}/>
            )
    }

    return(
        <div className="games-filter">
            <div className="games-filter-form">
                <form
                    onChange={() => FILTER.handleChangePlatform(platformWatch(),navigate)}
                    className='filter-section'>
                    <h4 className='filter-section__title'>Platform</h4>
                    <div className='filter-section__conteiners'>
                        <FilterInput control={platformControl} name='pc'/>
                        <FilterInput control={platformControl} name='browser'/>
                    </div>
                </form>

                <form
                    onChange={() => FILTER.handleChangeTag(tagWatch(),navigate)}
                    className='filter-section'>
                    <h4 className='filter-section__title'>Genre</h4>
                    <div className='filter-section__conteiners h-40 overflow-scroll scroll-smooth bar'>
                        {renderTagForm(FILTER.getTagDefaultValues())}
                    </div>
                </form>
            </div>
        </div>
    )
}


