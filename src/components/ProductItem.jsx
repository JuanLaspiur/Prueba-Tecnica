import React from "react";
import './ProductItemStyle.css';


const ProductItem = ({ NombreProducto, Descripcion, DetalleDescripcion, Imagen, ImagenMarca }) => {
  return (
    <div className="product-container">
      <div className="product-info">
        <h2 className="product-title">{NombreProducto} </h2>
        <p className="product-description" >{Descripcion}</p>
        <p className="product-detalleDescription" >{DetalleDescripcion}</p>
        <img src={ImagenMarca} alt={`${NombreProducto} Marca`} className="brand-image" /> 
      </div>
      <img src={Imagen} alt={NombreProducto} className="product-image" />

    </div>
  );
}

export default ProductItem;
