import './BoxSong.css'
import CardAbout from '../CardAbout/CardAbout'
import { useState, useEffect } from 'react'
import CardLyric from '../CardLyric/CardLyric'
import CardMessage from '../CardMessage/CardMessage'

const BoxSong = ({ id, title, band, srcImg, textOriginal, textTranslation }) => {
    const [favorites, setFavorites] = useState([])
    let markedCheck = 0

    const likeBtnClick = () => {
        if (markedCheck === 0) {
            addMusicToFavorites()
        } else {
            removeMusicFromFavorites()
        }
    }

    const addMusicToFavorites = () => {
        const arr = [...favorites, {id: id, title: title, band: band}]
        setFavorites(arr)

        localStorage.setItem('favorites', JSON.stringify(arr))
    }

    const removeMusicFromFavorites = () => {
        const indice = findElement(favorites, id)
        favorites.splice(indice, 1)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        document.querySelector('.likeBtn i').setAttribute('class', 'fa-regular fa-heart')
    }

    const findElement = (array, element) => array.findIndex(item => item.id === element)

    const checkSongStatus = () => {
        const localValue = JSON.parse(localStorage.getItem('favorites')) ?? []
        const result = findElement(localValue, id)
        if (result >= 0) {
            markedCheck = 1
            return "fa-solid fa-heart"
        } 

        markedCheck = 0
        return "fa-regular fa-heart"
    }

    useEffect(() => {
        const local = localStorage.getItem('favorites')
        if (local) setFavorites(JSON.parse(local))

        checkSongStatus()
    }, [])

    return (
        <>
            <CardAbout title={title} band={band} srcImg={srcImg} />
            <div className="line"></div>
            <CardLyric 
            likeBtnClick={likeBtnClick}
            checkSongStatus={checkSongStatus} 
            textOriginal={textOriginal} 
            textTranslation={textTranslation} />
        </>
    )
}

BoxSong.defaultProps = {
    title: "Não informado",
    band: "Não informado",
    srcImg: "Não informado",
    textOriginal: <CardMessage text='Essa música não possui uma tradução'/>,
    textTranslation: <CardMessage text='Essa música não possui uma tradução'/>,
}

export default BoxSong