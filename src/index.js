import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Start from './Start';
import { ChakraProvider } from '@chakra-ui/react'
import Details from './Component/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Start/>} />
            <Route path="/app" element={<App/>} />
            <Route path="/det" element={<Details/>}/>
        </Routes>
    </BrowserRouter>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
