import './App.css'
import data from'./mokData'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Header from './components/Header'

function App() {
  // 자식한테만 상속이 되기때문에 App쪽에 있어야함
  const [fruit, setFruit] = useState(data);

  return (
    
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage fruit={fruit} />} />
        <Route path='/test' element={<h1>테스트페이지</h1>} />
      </Routes>

    </div>
     
  )
}

export default App
