import React from 'react'
import { Link } from 'react-router-dom'

export default function CollectionCard({image, title, place, slug}) {
    return (
        <Link to={slug} className="card" >
            <img src={image} className="card-img-top" alt={title} / >
            <div className="card-body" style= {{position: "absolute", bottom: "0", color: "#ffffff", backgroundColor: "#21212154", width: "100%"}}>
                <p className="card-text">{title}</p>
                <p className="card-text">{place}</p>
            </div>
        </Link>
    )
}
