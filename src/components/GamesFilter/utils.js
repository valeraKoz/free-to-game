export const getParams =(search)=> {
    const object = {};
    search
        .slice(1).split('&')
        .map(param => param.split('='))
        .forEach(item=>{
            const [key, value] = item;
            key === 'category' ? object['tag'] = value : object[key] = value;
        })
    return object
}