import {Controller} from "react-hook-form";
import PropTypes from "prop-types";
import './index.css'

export const FilterInput = ({control,name}) => {
    return (
        <div className="filter-section__item relative">
            <Controller
                control={control}
                name={name}
                render={({field: {value, onChange}}) => (
                    <input
                        className='checkbox-input cursor-pointer pr-5 absolute right-0 bg-inherit'
                        id={name}
                        type="checkbox"
                        checked={value}
                        onChange={(e) => {
                            onChange(e.target.checked);
                        }}
                    />
                )}
            />
            <label
                className='w-full cursor-pointer pt-0.5 pb-0.5 pl-5'
                htmlFor={name}>
                {allFirstCharToUpperCase(name)}
            </label>
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