import './Favorites.css'
import { useState, useEffect } from 'react'
import CardSong from '../../components/layouts/CardSong/CardSong'
import './Favorites.css'

const Favorites = () => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const local = localStorage.getItem('favorites')
        if (local) setFavorites(JSON.parse(local))
    }, [])

    return <div className="favorites-box">
        <h3>Suas letras favoritas</h3>
        <div className="line"></div>
        {favorites.map((favorite, i) => <CardSong key={i} song={favorite}/>)}
    </div>
}

export default Favorites