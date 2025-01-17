

export const FilteredGameWrapper = ({children}) => {
    return(
        <div
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {children}
        </div>
    )
}