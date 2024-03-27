import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { addOty } from "../redux/productActions/addQty"
import { decreaseQty } from "../redux/productActions/decreaseQty"
import { productReducer } from "../redux/reducer/productReducer"
import { addToCart } from "../redux/cartActions/addToCart";
import { deleteFromCart } from "../redux/cartActions/deleteFromCart";
import { decreaseFromCart } from "../redux/cartActions/decreaseFromCart";
import { cartReducer } from "../redux/reducer/cartReducer";

import plus from '../img/+icon.png'
import minus from '../img/-icon.png'
import imgcart from '../img/++.png';
// import 


export default function Showshop() {
    const products = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()
    // const [qty, setQty] = useState(0);
    return (
        <>

            <h1> Watch Store</h1>
            {/* style={{ "width": "18rem", "marginRight": "auto", "marginLeft": "auto", "marginBottom": "5px", "borderColor": "gray", "marginTop": "1.5rem" }} */}
            <div id="cards" >
            
                {products.map((item, i) => (
                    <>

                        <div class="card" style={{ "width": "20rem","marginTop": "1.5rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">{item.name} </p>
                                <img class="card-img-top" src={item.image} alt="" />
                                <p class="card-text">PRICE:{item.price} </p>
                                <p class="card-text">{item.Qty} </p>
                                <p class="card-text">{item.description} </p>

                                <button onClick={(e) => {
                                    e.preventDefault();

                                    dispatch(addToCart(item));
                                    dispatch(decreaseQty(item));
                                    console.log("product");
                                    console.log(products);


                                }}

                                ><img src={imgcart} style={{ "width": "30px", "height": "30px" }}></img></button>
{/* 
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(addToCart(item));
                                        dispatch(decreaseQty(item))

                                        setQty(item.cartQty)
                                     

                                    }} type="button" class="btn btn-outline-warning"
                                ><img src={plus} style={{ "width": "20px", "height": "20px" }}></img> </button>


                                <button onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(decreaseFromCart(item));
                                    dispatch(addOty(item));
                                    setQty(item.cartQty)
                              

                                }} type="button" class="btn btn-outline-warning"
                                ><img src={minus} style={{ "width": "20px", "height": "20px" }}></img></button>
 */}

                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

