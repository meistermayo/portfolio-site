import './style/App.css'
import { Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Content from './components/Content'

function App() {

  return (
    <>
    <Topbar/>
      <Content>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </Content>
    <Footer/>
    </>
  )
}

export default App
