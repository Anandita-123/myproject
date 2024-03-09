import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

export default function Card({id,image,name, votes, price}) {

    const token = localStorage.getItem("token")
    return (
        <div className="card" key={id} style={{width: "18rem"}}>
            <img src={image} height="200px" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text d-flex flex-column">
                        <span>Votes : {votes}</span>
                        <span>Price : {price}</span>
                    </p>
                    <Link to={token ? `/cart/${id}` : "/login"} className="btn btn-primary">Add Item</Link>
                </div>
        </div>
    )
}
