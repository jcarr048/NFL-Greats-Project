const TeamInfo = ({logo, name, division}) => {
        return (
            <div className="team-choice">
                <div className="img-wrapper">
                    <img src={logo} alt={name}></img>
                </div>
                <div className="team-tab">
                    <h3>{name}</h3>
                    <h4>{division}</h4>
                </div>
            </div>
        )
    }
    
    export default TeamInfo