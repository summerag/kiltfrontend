import React, {useState, useEffect} from 'react'
import PlayerForm from './playersForm'
import playerService from '../services/players'
import Player from './player'

const Players = () => {
    const [formOpen, setFormOpen] = useState(false)
    const [players, setPlayers] = useState([])
    const [newPlayer, setNewPlayer] = useState()


    useEffect(() => {
        playerService.getAll()
        .then(initialplayers => setPlayers(initialplayers))
    }, [])

    const closeForm = () => setFormOpen(false)

    const addPlayer = (event) => {
        event.preventDefault()

        console.log(event.target)
        //const playerObject = {
       //     id: players.length + 1,
//
       // }
        
    }

    return (
        <div>
            <h1>Players Page</h1>
            <button onClick={() => setFormOpen(true)}>New Player</button>
            {formOpen &&
                <PlayerForm 
                    onClick={closeForm} 
                    onSubmit={addPlayer} 
                />
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