// src/router/AppRouter.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Component/Home';
import About from '../Component/About/about';
import NotFound from '../Component/NotFound/404NotFound';
import Header from '../Component/Common/Header/Header';
import Footer from '../Component/Common/Footer/Footer';
import Contact from '../Component/Contact/contact';
 import Founder from '../Component/Founder/founder';

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/founder' element={<Founder />} />
                <Route path='/contact' element={<Contact />} />
                 <Route element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
