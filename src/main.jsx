import {createRoot} from 'react-dom/client'
import './reset.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import {Contact} from "./pages/Contact.jsx";
import {Address} from "./pages/Address.jsx";
import { Shipping } from './pages/Shipping.jsx'
import { Error } from './pages/Error.jsx'
import Home from "./pages/Home.jsx";
import { Provider } from 'react-redux';
import { paymentStore } from './store/paymentStore';

createRoot(document.getElementById('root')).render(

    <Provider store={paymentStore}>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>

                    <Route path="/address" element={<Address/>}/>
                    <Route path="/shipping" element={<Shipping/>}/>

                    <Route path="/*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
</Provider>

)


