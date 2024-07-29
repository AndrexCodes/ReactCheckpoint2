import Player from "./Player"
import players from "../players"

const PlayersList = ()=>{
    return(
        <div className="grid grid-cols-2 w-full px-10 gap-3">
            {players.map(player => <Player {...player}/>)}
        </div>
    )
}

export default PlayersList