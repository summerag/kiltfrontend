import './hamburger.scss'

const Hamburger = ({className, onClick}) => {
    return(
        <div className={className} >
            <input type="checkbox" id="toggle" />
            <label id="hamburger" htmlFor="toggle" onClick={onClick}>
                <div className="hamburger">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </div>
    )
}

export default Hamburger;