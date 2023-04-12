import './CardLyric.css'

const CardLyric = ({likeBtnClick, checkSongStatus, textOriginal, textTranslation}) => {
    const originalBtn = () => {
        document.querySelector('.text-translation').style.display = 'none'
        document.querySelector('.text-original').style.display = 'block'
    }

    const translationBtn = () => {
        document.querySelector('.text-original').style.display = 'none'
        document.querySelector('.text-translation').style.display = 'block'
    }
    
    return (
        <div className="lyric">
            <div className="options">
                <div className="options-box">
                    <div onClick={originalBtn} className="original">Original</div>
                    <div onClick={translationBtn} className="translation">Tradução</div>
                </div>
                <div onClick={likeBtnClick} className="likeBtn"><i className={checkSongStatus()}></i></div>
            </div>

            <pre className="text-original">{textOriginal}</pre>
            <pre className="text-translation">{textTranslation}</pre>
        </div>
    )
}

export default CardLyric