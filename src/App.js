import { Home } from '@mui/icons-material';
import './App.css';
import HomePage from './first/HomePage';
import FoodSection from './second/foodSection';
import Cart from './third/order'
import Track from './third/tracking';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SearchBar from './second/searchbar';

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/food-section' element={<FoodSection/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/track' element={<Track/>}></Route>
                <Route path='/search' element={<SearchBar/>}></Route>
            </Routes>
      </BrowserRouter>
    
  );
}

export default App;
