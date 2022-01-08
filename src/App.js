import './scss/app.scss';
import React, {useEffect, useState} from "react";
import {Header} from "./components";
import {Routes, Route} from "react-router-dom";
import {Home, Cart} from "./pages";
import axios from "axios";


function App() {
    const [pizzasState, setPizzasState] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/db.json').then(res => {
            setPizzasState(res.data.pizzas)
        });
    },[]);


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route exact path={'/'} element={<Home pizzasState={pizzasState}/>}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
