const TeamInfo = ({logo, name}) => {
        return (
            <div className="team-choice">
                <div className="img-wrapper">
                    <img src={logo} alt={name}></img>
                </div>
                <div className="team-tab">
                    <h3>{name}</h3>
                </div>
            </div>
        )
    }
    
    export default TeamInfo