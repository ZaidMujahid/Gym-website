import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>{/* bcoz we have used routes in app js we have to wrap this in BrowserRouter to enable routing */}
        <App />
    </BrowserRouter>
)




