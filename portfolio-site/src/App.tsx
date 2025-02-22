import './style/App.css'
import { Route, Routes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Content from './components/Content'
import Programming from './pages/Programming'
import IK from './pages/IK'
import Music from './pages/Music'
import Art from './pages/Art'

function App() {

  return (
    <>
    <Topbar/>
      <Content>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Programming" element={<Programming/>}/>
          <Route path="/IK" element={<IK/>}/>
          <Route path="/Music" element={<Music/>}/>
          <Route path="/Art" element={<Art/>}/>
        </Routes>
      </Content>
    <Footer/>
    </>
  )
}

export default App
