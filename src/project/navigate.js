
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Shop from './Shop'
import imgcart from '../img/carticon.png'

import About from '../project/about'
import Cart from "../project/cart";


export function Navigator() {
    const navigate = useNavigate();

    return (
        <>
        <div id = "buttons">
            <button type="button" class="btn btn-outline-dark" onClick={() => navigate('/cart')} style={{ "width": "120px", "height": "60px" }}>
                <img className={imgcart} src={imgcart} style={{ "width": "50px", "height": "50px" }}></img></button>

            <button type="button" class="btn btn-outline-dark" onClick={() => navigate('/')} style={{ "width": "120px", "height": "60px" }}>Our products</button>
            <button type="button" class="btn btn-outline-dark" onClick={() => navigate('/about')} style={{ "width": "120px", "height": "60px" }}>About</button>
            </div>
            <Routes>

                <Route exact path="/" element={<Shop />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/cart" element={< Cart />} />

            </Routes>



        </>
    );

};




