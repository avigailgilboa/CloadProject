import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addOty } from "../redux/productActions/addQty"
import { decreaseQty } from "../redux/productActions/decreaseQty"
import { productReducer } from "../redux/reducer/productReducer"
import { addToCart } from "../redux/cartActions/addToCart";
import { deleteFromCart } from "../redux/cartActions/deleteFromCart";
import { decreaseFromCart } from "../redux/cartActions/decreaseFromCart";
import { cartReducer } from "../redux/reducer/cartReducer";
import{GoToPaymant} from '../project/GoToPayment'

import imgcart from '../img/garbegeicon.png';
import plus from '../img/+icon.png'
import minus from '../img/-icon.png'
export default function Showcart() {
    const cart = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    const [qty, setQty] = useState(0);
    // const [sum, setsum] = useState(0);
    return (
        <>
         <button  onClick={GoToPaymant} type="button" class="btn btn-outline-warning">payment</button>
            {console.log(cart)}
            <h1> cart</h1>
            <div id="cart">

                {cart.map((item) => (
                    <>

                        <div class="productsInCart" style={{ "width": "18rem" }}>
                            <div class="cart-body">
                                {/* <h5 class="productsInCart-title"></h5> */}
                                <p class="productsInCart-text">{item.name} </p>
                                <img class="productsInCart-img-top" src={item.image} alt="" />
                                <p class="productsInCart-text">{item.price} </p>
                                <p class="productsInCart-text">{item.cartQty} </p>


                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(addToCart(item));
                                        dispatch(decreaseQty(item))

                                        setQty(item.cartQty)
                                        console.log("cart add");
                                        console.log(cart);

                                    }} type="button" class="btn btn-outline-warning"
                                ><img src={plus} style={{ "width": "20px", "height": "20px" }}></img> </button>


                                <button onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(decreaseFromCart(item));
                                    dispatch(addOty(item));
                                    setQty(item.cartQty)
                                    console.log("cart del");
                                    console.log(cart);

                                }} type="button" class="btn btn-outline-warning"
                                ><img src={minus} style={{ "width": "20px", "height": "20px" }}></img></button>


                                <button onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(deleteFromCart(item));
                                    dispatch(addOty(item));
                                    console.log("cart del all in same type")
                                    console.log(cart);

                                }} type="button" class="btn btn-outline-warning"
                                ><img src={imgcart} style={{ "width": "1rem" }}></img></button>

                               
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </>
    )
}
