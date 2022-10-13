import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos' element={<Products />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/' element={<ItemListContainer />} />
        </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
