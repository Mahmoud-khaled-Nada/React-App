import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import Registerin from '../components/auth/Register';

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/registerin' element={<Registerin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router