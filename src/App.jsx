
import Meme from './pages/Meme';
import Home from './pages/Home';
import Bar from './components/bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MemeList from './pages/MemeList';

function App() {
  

  return (
    <div className='flex'>
     <BrowserRouter>
        <Bar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/memelist' element={<MemeList />}/>
          <Route path='/meme' element={<Meme />}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
