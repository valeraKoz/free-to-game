import PropTypes from "prop-types";

export const GameTitle = props => {
    return (
        <div className="game-title flex justify-between items-start gap-1">
            <h3 className="font-bold text-md">{props.title}</h3>
        </div>
    )
}

GameTitle.propTypes = {
    title: PropTypes.string.isRequired
}