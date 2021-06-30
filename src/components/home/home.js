import './home.scss'
import lblcs from '../../assets/lblcs.png'
import disc from '../../assets/nice.png'
const home = () => {
    return (
        <div className="logoimage">
            <div className="homeBackground">
            </div>
            <section className="intro">
                <h1>Esports Organization currently with League of Legends teams playing in the following leagues</h1>
                <a href="https://discord.gg/gV665QtZrt"><img src={lblcs} alt='LBLCS discord link'></img></a>

            </section>  
            <section>
                <h1>Join us on discord</h1>
                <a href="https://discord.gg/HrAuQhdBBZ"><img src={disc} alt='kilts discord link' /></a>
            </section>

        </div>

    )
}

export default home;