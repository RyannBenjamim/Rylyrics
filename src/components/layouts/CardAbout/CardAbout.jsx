import './CardAbout.css'

const CardAbout = ({ title, band, srcImg }) => {
    const regex = /(.+)\(/
    const editTitle = regex.exec(title)
    return (
        <div className="about">
            <img src={srcImg} alt={title} />
            <div className="infos">
                <h2>{editTitle ? editTitle[1] : title}</h2>
                <h3>&copy; {band}</h3>
            </div>
        </div>
    )
}

export default CardAbout