import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Blogs from './Pages/Blogs.jsx';
import './reset.scss';
import './Module/Header.module.css';
import './Module/Products.module.css';
import './Module/Iphone.module.css';
import './Module/Products.module.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blogs />} />
            </Routes>

        </Router>
    );
}

export default App;
