import './style/App.css'
import { Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Content from './components/Content'
import Work from './pages/Work'
import Programming from './pages/Programming'
import IK from './pages/IK'
import Music from './pages/Music'

function App() {

  return (
    <>
    <Topbar/>
      <Content>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Programming" element={<Programming/>}/>
          <Route path="/IK" element={<IK/>}/>
          <Route path="/Music" element={<Music/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </Content>
    <Footer/>
    </>
  )
}

export default App
