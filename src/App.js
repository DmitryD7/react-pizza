import './scss/app.scss';
import React from "react";
import {Header} from "./components";
import {Routes, Route} from "react-router-dom";
import {Home, Cart} from "./pages";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route exact path={'/'} element={<Home/>}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
