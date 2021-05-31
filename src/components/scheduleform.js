import './scheduleform.css'

const ScheduleForm = ({ onClick }) => {
    return(
        <div className="form-container" >
            <button className="close"onClick={onClick} >x</button>
            <h1>Nice</h1>
            <form >
                <div>
                    <label htmlFor="lolname"> Player name (LoL name): </label>
                    <input type="text" name="lolname" />
                </div>
                <div>
                    <label htmlFor="discordtag">Discord tag: </label>
                    <input type="text" name="discordtag" />
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>
        </div>
    )

}


export default ScheduleForm