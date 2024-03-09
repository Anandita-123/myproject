import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from "axios"

export default function Breakfast() {
    const [bfList, setbfList] = useState([])
    // export default function Pizza() {
        // const [pizza, setPizza] = useState([])
        useEffect(() => {
           axios.get("http://localhost:3000/api/menu/breakfast")
            .then((res) => setbfList(res.data))
            .catch((err) => console.log(err))
        })

    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/menu/breakfast")
    //     .then((res) => setbfList(res.data))
    //     .catch((err) => console.log(err))
    // },[])
    
    return (
        <section className='py-5'>
            <div className='container d-flex align-items-center justify-content-center gap-3' style={{flexWrap: "wrap"}}>
                {
                    bfList.map((item) => (
                        <Card id={item.id} image={item.image} name={item.name} votes={item.votes} price={item.price}/>
                    ))
                }
            </div>
        </section>

    )
}