import { useState, useEffect} from "react"
import { useSearchParams } from "react-router-dom"
import CardMessage from "../../components/layouts/CardMessage/CardMessage"
import CardSong from "../../components/layouts/CardSong/CardSong"
import Spinner from "../../components/layouts/Spinner/Spinner"
import './Search.css'

const Search = () => {
    const [songs, setSongs] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')

    const getSongs = async (url) => {
        setSongs([])
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)

        if (data.response.numFound > 0) {
            setSongs(data.response.docs)
        } else {
            setSongs(data.response)
        }
    }

    useEffect(() => {
        const urlSongs = `https://api.vagalume.com.br/search.excerpt?q=${query}&limit=10`
        getSongs(urlSongs)
    }, [query])
    
    return (
        <div className="music-box">
            {songs.numFound === 0 && <CardMessage text='Nenhum resultado foi encontrado'/>}
            {songs.length === 0 && <Spinner/>}
            {songs.length > 0 && songs.map((song, i) => <CardSong song={song} key={i}/>)}
        </div>
    )
}

export default Search