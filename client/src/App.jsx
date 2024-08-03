import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import PostCard from './components/PostCard'

function App() {

  return (
    <Routes>
      <Route index element={<PostCard/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  )
}

export default App
