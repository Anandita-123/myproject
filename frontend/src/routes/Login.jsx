import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

export default function Login() {
  const navigate = useNavigate();
    
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const validateUserAccount = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3000/api/user/auth", formData)
    .then((result) => {
      if(result.data === "success"){
        localStorage.setItem("token", true)
        navigate("/")
      }
      else{
        navigate("/signup")
      }
    })
    .catch((err) => console.error(err))
  }

  return (
    <div className="container py-5">
      <form onSubmit={validateUserAccount} className='py-4 px-5 rounded' style={{ width: "500px", marginInline: "auto", border: "2px solid #c4c4c4" }}>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" name='email' value={formData.email} onChange={handleChange}/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" name='password' value={formData.password} onChange={handleChange}/>
        </div>
        <button type="submit" class="btn btn-primary">Get Started</button>
      </form>
    </div>

  )
}
