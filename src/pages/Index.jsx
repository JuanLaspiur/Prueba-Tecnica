import React from "react";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import products from "../config/products.json"; // Ajusta la ruta según sea necesario
import './indexStyles.css'; // Importa la hoja de estilos

function Index() {
  const containerStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    height: "100%",
    padding: "10px",
    textAlign: "center",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1>Lista de productos</h1>
      <div className="listContainer">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            NombreProducto={product.NombreProducto}
            Descripcion={product.Descripcion}
            DetalleDescripcion={product.DetalleDescripcion}
            Imagen={product.Imagen}
            ImagenMarca={product.ImagenMarca}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
