import React, {useState} from 'react'
import ScheduleForm from './scheduleform'




const Schedule = () => {

    const [formOpen, setFormOpen] = useState(false)
    const [players, getPlayers] = useState([])


    const closeForm = () => setFormOpen(false)

    return (
        <div>
            <h1>Schedule Page</h1>
            <button onClick={() => setFormOpen(true)}>New Player</button>
            {formOpen &&
                <ScheduleForm onClick={closeForm} />
            }
        </div>

    )
}

export default Schedule