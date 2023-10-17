
import Meme from './pages/Meme';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MemeList from './pages/MemeList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  

  return (
    <div className='flex'>
     <BrowserRouter>
        <NavBar />
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/memelist' element={<MemeList />} protected/>
            <Route path='/meme' element={<Meme />} protected />
          </Routes>
        </Provider>
     </BrowserRouter>
    </div>
  )
}

export default App
