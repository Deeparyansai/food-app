import React from 'react'

export default function Body
    () {
    return (
        //card
        <div>
            <div className="card mt-5" style={{ "width": "18cm", "maxHeight": "3600px" }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example.</p>
                </div>
                <div className='container w-100 '>
                    <select className='m-2 h-100 bg-success'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}> {i + 1} </option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100 bg-success'>
                        <option value="half">Half</option>
                        <option value="Full">Full</option>
                    </select>
                    <div className='d-inline h-100 fs-5'>
                        Price
                    </div>
                </div>
            </div>
        </div>
    )
}
