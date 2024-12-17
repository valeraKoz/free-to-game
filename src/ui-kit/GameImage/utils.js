export const videoStart = (videoRef, url, loaderRef) =>{
    const loader = loaderRef.current;
    const video = videoRef.current;
    console.log('Загрузка видео началась!');
    showLoader(loader);
    video.src = url;
    video.oncanplay = () => {
        console.log('Убрать лоадер')
        hideLoader(loader);
    }
    video.load();
    video.play().catch((e)=>{});
    video.currentTime = 15;
}
export const videoStop = (videoRef, loaderRef) =>{
    const loader = loaderRef.current;
    const video = videoRef.current;
    video.pause();
    video.src = '';
    hideLoader(loader);
}

export const showLoader = (loader) => {
    loader.classList.add('flex');
    loader.classList.remove('hidden');
}
export const hideLoader = (loader) => {
    loader.classList.add('hidden');
    loader.classList.remove('flex');
}
