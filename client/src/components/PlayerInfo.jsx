const PlayerInfo = ({onClick, image, name, team_id}) => {

    return(
        <div className="player card" onClick={onClick}>
            <div className="img-wrapper">
            <img src={image} alt={name}></img>
            </div>
            <div className="player-tab">
                <h2>{name}</h2>
                <h4>{team_id}</h4>
            </div>
        </div>
    )
}

export default PlayerInfo