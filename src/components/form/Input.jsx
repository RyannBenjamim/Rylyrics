import Container from '../../components/layouts/Container/Container'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import './Input.css'

const Input = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name) return

        navigate(`/search?q=${name}`)
        setName('')
    }
    
    return (
        <Container>
            <form onSubmit={handleSubmit} className='search-form'>
                <input 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="Pesquise por uma música"
                value={name}
                />
                <button type='submit' className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </Container>
    )
}

export default Input