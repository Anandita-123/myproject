import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Order() {
    const [isConfirm, setIsConfirm] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setIsConfirm(false)
        }, [3000])
    }, [])

    return (
        <>
            <div className='container d-flex align-items-center justify-content-center' style={{ padding: "10rem 0" }}>
                {isConfirm ?
                    <>
                        <iframe src="https://giphy.com/embed/YlSR3n9yZrxfgVzagm" className="giphy-embed" allowFullScreen></iframe>
                        <p className='py-5 display-5 text-center'>Order Confirmed</p>
                    </>
                    :
                    <>
                        <iframe src="https://giphy.com/embed/y25p22Takcd43oRtaI" className="giphy-embed" allowFullScreen></iframe>
                        <button className='btn btn-primary' onClick={() => navigate("/")}>Go to Home</button>
                    </>
                }
            </div>
        </>
    )
}
