import React from "react"
import './SmallItemStyle'

const SmallItem =  ({ NombreProducto, Descripcion, DetalleDescripcion, Imagen, ImagenMarca }) =>{
  return(
<div className="product-container">
      <div className="product-info">
        <h2>{NombreProducto} <img src={ImagenMarca} alt={`${NombreProducto} Marca`} className="brand-image" /> </h2>
        <p>{Descripcion}</p>
        <p>{DetalleDescripcion}</p>
      </div>
      <img src={Imagen} alt={NombreProducto} className="product-image" />
    </div>
  )
}
export default SmallItem;