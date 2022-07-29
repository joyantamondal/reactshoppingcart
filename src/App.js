
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
  <CartProvider>
  <Home/>
  <Cart/>
  </CartProvider>
    </div>
  );
}

export default App;
