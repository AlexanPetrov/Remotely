import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Post from './pages/Post'
import Search from './pages/Search'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/pages/Home' element={<Home />} />
        <Route path='/pages/About' element={<About />} />
        <Route path='/pages/Contact' element={<Contact />} />
        <Route path='/pages/Post' element={<Post />} />
        <Route path='/pages/Search' element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App