export const GamePublisherFooterCard = (props) => {
    const {publisher, releaseDate} = props;

    const convertDate = (date) => {
        return date.split('-').reverse().join('.')
    }

    return (
        <div className="game-publisher-footer-card  flex pl-3 pr-3 p-1 justify-between flex-row-reverse items-center bg-neutral-700 text-amber-600">
            <div className="game-publisher-footer-card__publisher text-xs">
                {publisher}
            </div>
            <div className="game-publisher-footer-card__release-date text-xs">
                {convertDate(releaseDate)}
            </div>
        </div>
    )
}