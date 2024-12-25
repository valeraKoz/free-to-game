import {Controller} from "react-hook-form";
import PropTypes from "prop-types";

export const FilterInput = ({control,name}) => {
    return (
        <div className='filter-section__item'>
            <Controller
                control={control}
                name={name}
                render={({field: {value, onChange}}) => (
                    <input
                        id={name}
                        type="checkbox"
                        checked={value}
                        onChange={(e) => {
                            onChange(e.target.checked);
                        }}
                    />
                )}
            />
            <label htmlFor={name}>{allFirstCharToUpperCase(name)}</label>
        </div>
    )
}


const allFirstCharToUpperCase = (words) => {
    return words
        .split(' ')
        .map(i => i.slice(0, 1).toUpperCase() + i.slice(1))
        .join(' ');
}


FilterInput.propTypes = {
    control: PropTypes.object,
    name: PropTypes.string,
}