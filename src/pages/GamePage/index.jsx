import './index.css'
import {useLocation} from "react-router";
import {useGetGameByIdQuery} from "../../api/endpoints.js";
import {GameImage} from "../../ui-kit/GameImage/GameImage.jsx";
import {useState} from "react";
import {GamePageDescription} from "../../ui-kit/GamePageDescription/GamePageDescription.jsx";
import {GamePageSection} from "../../ui-kit/GamePageSection/GamePageSection.jsx";
import {GamePageScreenshot} from "../../ui-kit/GamePageScreenshot/GamePageScreenshot.jsx";
import {PageContainer} from "../../ui-kit/PageContainer/PageContainer.jsx";





export const GamePage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const GAME_ID = useGetGameIdFromPathname();
    const {isLoading, data} = useGetGameByIdQuery(GAME_ID);

    const renderGamePage = () => {
        return (
            <div className="game-page__wrapper container flex flex-col gap-5 p-4 lg:grid lg:grid-cols-[300px_minmax(900px,_1fr)]">
                <div className='game-page__left-bar'
                     onMouseEnter={()=>{setShowVideo(true)}}
                     onMouseLeave={()=>{setShowVideo(false)}}
                >
                    <div className='sticky top-32 shadow-lg shadow-neutral-700'>
                        <GameImage id={GAME_ID} showVideo={showVideo}/>
                        <a
                            className='p-4 bg-amber-600 w-full block text-center hover:bg-orange-500'
                            href={data['game_url']}
                            >Play Now
                        </a>
                    </div>
                </div>
                <div className='game-page__right-bar lg:pl-10 flex flex-col gap-12'>
                    <section>
                        <h2 className='text-4xl font-bold'>{data.title}</h2>
                        <GamePageDescription
                            shortDescription={data['short_description']}
                            description={data.description ? data.description : null}/>
                    </section>
                    <GamePageSection sectionTitle='Additional information' information={getAdditionalInformation(data)}/>
                    <GamePageScreenshot screenshots={data.screenshots}/>
                    <GamePageSection sectionTitle='Minimum System Requiments' information={getMinSystemSpec(data['minimum_system_requirements'])}/>
                </div>

            </div>
        )
    }

    return (
        <PageContainer>
            {isLoading ? 'Loading...' : renderGamePage()}
        </PageContainer>
    )
}


const useGetGameIdFromPathname = ()=>{
    const {pathname} = useLocation();
    return +pathname.slice(6);
}

const getAdditionalInformation = (data) => ({
    'Title':        data.title,
    'Developer':    data.developer,
    'Publisher':    data.publisher,
    'Release Date': data['release_date'].split('-').reverse().join('.'),
    'Genre':        data.genre,
    'Platform':     data.platform,
})
const getMinSystemSpec = (data) => data && ({
    'OS':                   data.os,
    'Processor':            data.processor,
    'Memory':               data.memory,
    'Graphics':             data.graphics,
    'Storage':              data.storage,
    'Additional Notes':     'Specifications may change during development'
})

