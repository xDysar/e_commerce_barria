import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/' element={<ItemListContainer />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
