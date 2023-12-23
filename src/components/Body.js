import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart } from './ContextReducer';

export default function Body
    (props) {
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceOption = Object.keys(options);
    const priceRef = useRef();
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    }
    let finalPrice = qty*parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value);
    } , [])
    return (
        //card
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src={props.foodItem.img} alt="..." style={{ height: "200px", objectFit: "fill" }} />
                    < div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>

                        <div className='container w-100 '>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref = {priceRef}  onChange={(e) => setSize(e.target.value)}>
                                {priceOption.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Rs {finalPrice}/-
                            </div>
                        </div>
                        <hr />
                        <button className='btn btn success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
