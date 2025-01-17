import {useEffect, useRef, useState} from "react";
import {videoStart, videoStop} from "./utils.js";
import {TbLoader2} from "react-icons/tb";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {ImagePlaceholder} from "./ImagePlaceholder.jsx";


const JPG_URL = (id,imgUrl) => imgUrl ? imgUrl : `https://www.freetogame.com/g/${id}/thumbnail.jpg`;
const VIDEO_URL = (id) => `https://www.freetogame.com/g/${id}/videoplayback.webm`;

export const GameImage = (props) => {
    const {id , name, showVideo, imgUrl, className: classes} = props;
    const videoRef = useRef(null);
    const loaderRef = useRef(null);
    const [isLoadingImage, setIsLoadingImage] = useState(true);
    useEffect(() => {
        showVideo ? videoStart(videoRef,VIDEO_URL(id), loaderRef) : videoStop(videoRef,loaderRef);
    })

    return (
        <div className={classes + ' relative game-image min-h-40 group/image-wrapper'}>
            {isLoadingImage ? <ImagePlaceholder/> : null}
            <LazyLoadImage
                src={JPG_URL(id,imgUrl)}
                className={`${isLoadingImage ? 'hidden' : ''} w-full`}
                onLoad={()=>setIsLoadingImage(false)}
                alt={name}
                threshold={200}
            />
            <div ref={loaderRef} className='hidden absolute items-center justify-center h-full w-full top-0'>
                <div className='absolute w-full h-full bg-amber-600 opacity-30'></div>
                <TbLoader2 size={40} className='group-hover/image-wrapper:animate-spin'/>
            </div>
            <video ref={videoRef} className='absolute top-0 h-full object-cover' src='' loop preload='none' muted></video>
        </div>

    )
}


