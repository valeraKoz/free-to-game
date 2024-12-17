export const setHeaders = (headers,options) => {
    for (let key in options) {
        headers.set(key, options[key])
    }
    return headers
}