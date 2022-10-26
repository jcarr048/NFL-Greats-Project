const PlayerInfo = ({onClick, image, name}) => {

    return(
        <div className="player card" onClick={onClick}>
            <div className="img-wrapper">
            <img src={image} alt={name}></img>
            </div>
            <div className="player-tab">
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default PlayerInfo