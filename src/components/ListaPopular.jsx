import React from 'react'



export const ListaPopular = ({ peliculas = [] }) => { 
  return (
    <div className="d-flex gap-3 z-3 p-5 rounded-3 overflow-auto px-4 py-3">
      {}
      {peliculas.map((pelicula) => (
        <div key={pelicula.id} style={{ minWidth: "160px", cursor: "pointer" }}>
          <img
            src={pelicula.imagen}
            alt={pelicula.titulo}
            style={{ width: "260px", height: "220px", objectFit: "cover", borderRadius: "8px" }}
          />
          <p style={{ color: "white", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            {pelicula.titulo}
          </p>
        </div>
      ))}
    </div>
  )
}