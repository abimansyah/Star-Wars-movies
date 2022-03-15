import './App.css';
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <div className='flex justify-center items-center h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/detail/:id' element={<DetailPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
