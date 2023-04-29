import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import DisplayOneProduct from './components/DisplayOneProduct';
import EditProduct from './components/EditProduct';
import { LoginPage } from './components/LoginPage';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { Cart } from './components/Cart';
import { Homepage } from './pages/Homepage';
// import ProductList from './pages/ProductList';
import AllProductListMui from './pages/AllProductListMui';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.pink[200],
    },
    secondary: {
      main: colors.brown[200]
    },
  },
})

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Homepage/>} default/>
            <Route path = "/add" element = {<AddProduct/>}/>
            <Route path = "/product" element = {<AllProductListMui/>}/>
            {/* <Route path = "/product" element = {<ProductList/>}/> */}
            <Route path = "/product/:id" element = {<DisplayOneProduct/>}/>
            <Route path = "/add/:id" element = {<EditProduct/>}/>
            <Route path = "/login" element = {<LoginPage/>} default/>
            <Route path = "/cart" element = {<Cart/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  </ThemeProvider>
  );
}

export default App;
