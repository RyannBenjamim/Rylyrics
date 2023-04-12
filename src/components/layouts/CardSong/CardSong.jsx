import './CardSong.css'
import { useNavigate } from 'react-router-dom'

const CardSong = ({song}) => {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/song?q=${song.band}/${song.title}`)
    }

    return (
        <div className="card" onClick={handleClick}>
            <p className="music-name">{song.title}</p>
            <p className="artist-name">&copy; {song.band}</p>
        </div>
    )
}

export default CardSong