import PropTypes from "prop-types";
import {categoryNameTranslator} from "./utils.js";

/*
*   Если пропсы не приходят по дефолту текст бесплатно и оражевого цвета
*   Если приходят, проверяет на наличие в обьекте с категориями игр CATEGORY_GAMES
*   и дает текст с переводом
 */


export const Badge = (props) => {
    const bg = props.name ? 'bg-neutral-600' : 'bg-amber-600 text-black';

    return (
        <span className={`p-1 ${bg} rounded-md font-light text-xs`}>
            {categoryNameTranslator(props.name)}
        </span>
    )
}



Badge.propTypes = {
    name: PropTypes.string,
}