export const PageContainer = ({styles,children}) => {
    return (
        <div className={`page-container container mx-auto max-w-6xl pt-20 lg:pt-40 min-h-screen ${styles}`}>
            {children}
        </div>
    )
}