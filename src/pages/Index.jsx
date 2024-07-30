import React, { useState } from "react";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import products from "../config/products.json";
import './indexStyles.css';
import { FaSearch } from 'react-icons/fa';

function Index() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.NombreProducto.toLowerCase().includes(filter.toLowerCase())
  );

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
      <h1 className="listTitle">Lista de productos</h1>
      <input
        type="text"
        placeholder="Buscar por nombre de producto"
        value={filter}
        onChange={handleFilterChange}
        className="input-filter"
      />
         <FaSearch size={25} className="lupita" />
      <div className="listContainer">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductItem
              key={index}
              NombreProducto={product.NombreProducto}
              Descripcion={product.Descripcion}
              DetalleDescripcion={product.DetalleDescripcion}
              Imagen={product.Imagen}
              ImagenMarca={product.ImagenMarca}
            />
          ))
        ) : (
          <p> No tenemos ese producto</p>
        )}
      </div>
    </div>
  );
}

export default Index;
