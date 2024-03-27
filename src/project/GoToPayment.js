import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
// import { Navigate, useNavigate } from "react-router-dom";

export function GoToPaymant() {
    useEffect(() => {
        alert("sure?")

    }, [])
    const cart = useSelector((state) => state.cartReducer)
    // const dispatch = useDispatch()
    // const navigate = useNavigate();
    // const [Qty, setQty] = useState(0);
    let sum = 0;
    cart.forEach(element => {
        sum += (element.price * element.cartQty)

    });
    return (
        <>
            <table class="table" >
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">לתשלום</th>
                        <th scope="col">מחיר</th>
                        <th scope="col">כמות</th>
                        <th scope="col">שם מוצר</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (<>

                        <tr>

                            <td>{item.price * item.cartQty}</td>
                            <td>{item.price}</td>
                            <td>{item.cartQty}</td>
                            <td>{item.name}</td>

                        </tr>
                    </>))}
                </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>סה"כ לתשלום:{sum}</h1>
            <button class="btn btn-dark">pay now</button>



        </>
    )
}




