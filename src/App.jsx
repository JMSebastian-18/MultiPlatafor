import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Music } from './pages/Music'
import { Nose } from './pages/Nose'
import { Movies } from './pages/Movies'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/music" element={<Music />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/nose" element={<Nose />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}