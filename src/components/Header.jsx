import React from 'react';
import logo from '../assets/logoEmpresa.png'; // Ajusta la ruta según tu estructura de directorios

// Definición del componente Header
const Header = () => {
  return (
    <header style={{
      backgroundColor: '#E5E5E5',
      padding: '10px',
      color: '#014185',
      textAlign: 'center'
    }}>
      <img src={logo} alt="Logo"  />
      <h1>Web Prueba Técnica Bernardo Lew</h1>
    </header>
  );
}

export default Header;

