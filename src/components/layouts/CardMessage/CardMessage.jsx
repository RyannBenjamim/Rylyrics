import './CardMessage.css'

const CardMessage = ({text}) => {
    return (
        <div className="message"><p><i className="fa-solid fa-circle-exclamation"></i> {text}</p></div>
    )
}

export default CardMessage