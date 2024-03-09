import { useState } from "react"
import axios from "axios"

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const createUserAccount = (e) => {
    e.preventDefault()
    
    axios.post("http://localhost:3000/api/user", formData)
    .then((user) => console.log(user))
    .catch((err) => console.error(err))
  }

  return (
    <div className='container py-5'>
      <form onSubmit={createUserAccount} className='py-4 px-5 rounded' style={{ width: "500px", marginInline: "auto", border: "2px solid #c4c4c4" }}>
      <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Full Name</label>
          <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp"  name="email" value={formData.email} onChange={handleChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control"  name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
    </div>
  )
}
