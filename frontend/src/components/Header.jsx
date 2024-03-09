import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavTab from './NavTab'
import Logo from './Logo'

const navTabs = [
    {
        image: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        title: "Dining Out",
        color: "#E5F3F3",
        isActive: true,
    },
    {
        image: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        title: "Delivery",
        color: "#E5F3F3",
        isActive: false,
    },
    {
        image: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        title: "Nightlife",
        color: "#E5F3F3",
        isActive: false,
    }
]

export default function Header() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <NavLink className="navbar-brand" to="/">
                            <Logo width="130px"/>
                        </NavLink>
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                            {token && <li className="nav-item">
                                <button className='btn btn-secondary' onClick={logout}>Log out</button>
                            </li>}
                            {!token && <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/login">Log in</NavLink>
                            </li>}
                            {!token && <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                            </li>}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='header-bottom d-flex gap-2'>
                    {
                        navTabs.map((tab, index) => (
                            <div key={index}>
                                <NavTab image={tab.image} color={tab.color} title={tab.title} isActive={tab.isActive} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </header>
    )
}
