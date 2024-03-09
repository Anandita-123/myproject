export default function NavTab({image,color,title,isActive}) {
  return ( 
    <div className='nav-tab d-flex align-items-center gap-2 py-3 px-3' style={ isActive ? {borderBlockEnd : "3px solid red", width: "max-content", cursor: "pointer"} : {width: "max-content", cursor: "pointer"}} key={color}>
      <div className="logo rounded-circle d-flex p-3 align-items-center justify-content-center" style={isActive ? {backgroundColor: color, width: "max-content"} : {backgroundColor: "#F8F8F8", width: "max-content"}}>
        <img src={image} alt="icon" width="30px" style={isActive ? {} : {filter: "grayscale(100%)"}}/>
      </div>
      <span style={isActive ? {color: "red", fontWeight: "600", fontSize: "20px"} : {color: "black", fontWeight: "600", fontSize: "20px"}}>{title}</span>
    </div>
  )
}
