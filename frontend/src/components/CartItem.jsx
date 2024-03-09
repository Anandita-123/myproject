import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CartItem({ id, image, title, price, qty }) {
  const [itemCount, setItemCount] = useState(1)
  const navigate = useNavigate()

  const increase = () => {
    if (itemCount < 10)
      setItemCount(itemCount + 1)
  }

  const decrease = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1)
    }
  }


  return (
    <div className="d-flex gap-5">
      <div className="card" style={{ width: "16rem" }} key={id}>
        <img src={image} className="card-img-top" alt="Food Image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex align-items-center justify-content-between">
            <button className="btn btn-primary" onClick={decrease}>-</button>
            <span className="qty">{itemCount}</span>
            <button className="btn btn-primary" onClick={increase}>+</button>
          </li>
          <li className="list-group-item">Total Price : Rs. {price * itemCount}</li>
        </ul>
      </div>

      <aside className='sidebar px-5 py-3 rounded' style={{ backgroundColor: "#e9e9e9", height: "max-content" }}>
        <h3>
          Subtotal(1 items) : ₹ {price * itemCount}
        </h3>
        <button className='btn btn-warning' onClick={() => navigate("/order")}>Proceed to Buy</button>
      </aside>
    </div>

  )
}
