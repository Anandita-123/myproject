import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from "axios"

export default function Veg() {
    const [vegList, setVegList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/menu/veg")
        .then((res) => setVegList(res.data))
        .catch((err) => console.log(err))
    },[])
    
    return (
        <section className='py-5'>
            <div className='container d-flex align-items-center justify-content-center gap-3' style={{flexWrap: "wrap"}}>
                {
                    vegList.map((item) => (
                        <Card id={item.id} image={item.image} name={item.name} votes={item.votes} price={item.price}/>
                    ))
                }
            </div>
        </section>

    )
}
