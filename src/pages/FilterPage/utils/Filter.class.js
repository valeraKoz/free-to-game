import {TAG_GAMES} from "../../../settings/settings.js";

class Filter{
    constructor(tag_games) {
        this.tag_games = tag_games;
        this.platform = {
            pc: false,
            browser: false
        }
        this.query_params = {
            "platform"  : "all",
            "tag"       : null,
            "sort-by"   : null
        };
    }
    setQueryParams(params){
        Object.keys(params).forEach(key=>{
            this.query_params[key] = params[key] !== undefined ? params[key] : null;
        })
    }
    getPlatformDefaultValues(){
        return this.platform
    }
    getTagDefaultValues(){
        return this.tag_games
    }
    getQueryParams(){
        return Object.keys(this.query_params)
                .filter(param=> this.query_params[param] !== null)
                .map(param=> `${param}=${this.query_params[param]}`)
                .join('&')

    }
    handleChangeTag(data,navigate){
        const tag = Object.keys(data)
                .filter((key)=> data[key]===true)
                .join('.')
        this.query_params.tag = tag !== '' ? tag : null
        navigate('?'+this.getQueryParams())
    }
    handleChangePlatform(data,navigate){
        this.query_params.platform = checkPlatform(data);
        navigate('?'+this.getQueryParams())
    }
    handleChangeSortBy(data,navigate){
        this.query_params['sort-by'] = data;
        navigate('?'+this.getQueryParams())
    }
}

export const FILTER = new Filter(TAG_GAMES)

function checkPlatform(obj) {
    return (obj.pc === true && obj.browser === true) ? 'all' : (obj.pc === true ? 'pc' : (obj.browser === true ? 'browser' : 'all'));
}