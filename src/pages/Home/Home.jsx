import './Home.css'
import BgImg from '../../imgs/Music-bro.svg'

const Home = () => {
    return (
        <div className="home">
            <img data-aos="fade-right" data-aos-duration="1200" src={BgImg} alt='Imagem de fundo' />
        </div>
    )
}

export default Home