import React from 'react';

export const ListaPopular = ({ peliculas = [] }) => {
  return (
   
    <div className="container-fluid p-4">
      <div className="row g-3">
        {peliculas.map((pelicula) => (
          
          <div key={pelicula.id} className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card bg-transparent border-0 h-100" style={{ cursor: "pointer" }}>
              <img
                src={pelicula.imagen}
                alt={pelicula.titulo}
                className="img-fluid rounded-3 shadow"
                style={{ 
                  width: "100%", 
                  height: "220px", 
                  objectFit: "cover" 
                }}
              />
              <div className="card-body px-0 py-2">
                <p className="text-white fw-bold mb-0" style={{ fontSize: "0.9rem" }}>
                  {pelicula.titulo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};