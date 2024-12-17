import {CATEGORY_GAMES} from "../../settings/settings.js";

export const categoryNameTranslator = (categoryName) => {
    if(!categoryName) return 'Бесплатно'
    const nameToLowerCase = categoryName.toLowerCase().trim();
    const translateName = CATEGORY_GAMES[nameToLowerCase];
    if(translateName) return translateName
    else throw new Error(`Нет значения ___ ${categoryName} ___ в CATEGORY_GAMES! Смотреть конфиг setting.js `)
}