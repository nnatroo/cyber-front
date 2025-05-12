import {createRoot} from 'react-dom/client'
import './reset.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import {Contact} from "./pages/Contact.jsx";
import {Address} from "./pages/Address.jsx";
import Home from "./pages/Home.jsx";
import {ShoppingCart} from "./pages/Cart.jsx";
import {Provider} from 'react-redux';
import {store} from './redux/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/address" element={<Address/>}/>
                <Route path="/shopping-cart" element={<ShoppingCart/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
)
