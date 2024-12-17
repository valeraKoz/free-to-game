export const GamePageSection = props => {
    const {sectionTitle, information} = props

    return information ?
    (
        <section className="game-page-section">
            <h2 className='text-2xl font-bold'>{sectionTitle}</h2>
            <div className='grid grid-cols-3 gap-3 pt-3'>
                {Object.keys(information).map((key,index)=>
                information[key]!==undefined && (
                    <div key={index} className='flex flex-col'>
                        <span className='text-xs text-neutral-400'>{key}</span>
                        <span className=''>{information[key]}</span>
                    </div>
            ))}
            </div>
        </section>
    )
    : null
}

