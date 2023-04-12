import './Song.css'
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import BoxSong from '../../components/layouts/BoxSong/BoxSong'
import Spinner from "../../components/layouts/Spinner/Spinner"

const apiKey = import.meta.env.VITE_API_KEY

const Song = () => {
    const [songData, setSongData] = useState({})
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')

    const band = query.match(/[^/]+(?=\/)/g)
    const title = query.match(/\/(.+)/)

    const getSongData = async (url) => {
        const resp = await fetch(url)
        const data = await resp.json()
        setSongData(data)
    }

    useEffect(() => {
        const urlSongData = `https://api.vagalume.com.br/search.php?art=${band[0]}&mus=${title[1]}&extra=artpic&apikey=${apiKey}`
        getSongData(urlSongData)
    }, [query])

    return (
        <div className="song-box">
            {Object.keys(songData).length === 0 && <Spinner/>}
            {Object.keys(songData).length > 0 && <BoxSong
            id={songData.mus[0].id && songData.mus[0].id}
            title={songData.mus[0].name && songData.mus[0].name}
            band={songData.art.name && songData.art.name}
            srcImg={songData.art.pic_medium && songData.art.pic_medium}
            textOriginal={songData.mus[0].text && songData.mus[0].text}
            textTranslation={songData.mus[0].translate && songData.mus[0].translate[0].text} />}
        </div>
    )
}

export default Song