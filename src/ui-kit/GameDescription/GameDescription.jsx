import PropTypes from "prop-types";

export const GameDescription = props => {
    return (
        <div className="gameDescription text-xs mt-3 line-clamp-3">
            {props.description}
        </div>
    )
}

GameDescription.propTypes = {
    description: PropTypes.string.isRequired
}