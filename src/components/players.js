import React, {useState, useEffect} from 'react'
import PlayerForm from './playersForm'
import playerService from '../services/players'
import Player from './player'




const Players = () => {
    const [formOpen, setFormOpen] = useState(false)
    const [players, setPlayers] = useState([])


    useEffect(() => {
        playerService.getAll()
        .then(initialplayers => setPlayers(initialplayers) )

    }, [])

    const closeForm = () => setFormOpen(false)

    return (
        <div>
            <h1>Players Page</h1>
            <button onClick={() => setFormOpen(true)}>New Player</button>
            {formOpen &&
                <PlayerForm onClick={closeForm} />
            }
            {
                players.map(player => 
                    <Player
                        key={player.id}
                        player={player}
                    
                    />
                    
                )
            }
        </div>

    )
}

export default Players