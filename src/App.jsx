import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Song from './pages/Song/Song'
import Header from './components/layouts/Header/Header'
import Favorites from './pages/Favorites/Favorites'
import Search from './pages/Search/Search'
import Container from './components/layouts/Container/Container'
import Input from './components/form/Input'
import Footer from './components/layouts/Footer/Footer'

function App() {
  return (
    <div>
      <head>
        <meta name="theme-color" content="#1B1C22" />
      </head>
      <body>
        <BrowserRouter>

          <Header/>
          <Input/>

          <Container>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/song" element={<Song/>}></Route>
              <Route exact path="/search" element={<Search/>}></Route>
              <Route exact path="/favorites" element={<Favorites/>}></Route>
            </Routes>
          </Container>

          <Footer/>

        </BrowserRouter>
      </body>
    </div>
  )
}

export default App
