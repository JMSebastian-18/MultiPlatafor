import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'


export const Movies = () => {
  return (
    <>
      <div style={{
        backgroundImage: "url('https://images8.alphacoders.com/545/thumb-1920-545909.jpg')",
        backgroundSize: "cover",
        minHeight: "633px",
        position: "relative"
      }}>
        <Header />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.9), transparent)"
        }} />

        <BannerInicio
          title="TOKYO GHOUL"
          year="2014"
          seasons="4 Seasons"
          rating="TV-MA"
          description="Ken Kaneki, a college student, barely survives a deadly encounter with a ghoul and is transformed into a half-ghoul, forced to live between two worlds."
        />

        <div style={{ color: "black" }} className="custom-black-text">
          <ListaPopular
            peliculas={[
              {
                id: 1,
                titulo: "Demon Slayer",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRaIUYW6W8mWGutUKJkRbKn2rOkYq9HN4Dg&s"
              },
              {
                id: 2,
                titulo: "Jujutsu Kaisen",
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuQMM35ht3NaWqNX95XyOwKxGG71skW5uIQ&s"
              },
              {
                id: 3,
                titulo: "Top Hero X",
                imagen: "https://static.tvtropes.org/pmwiki/pub/images/gl_i4ulboaaannz.jpg"
              },
              {
                id: 4,
                titulo: "jojo's bizarre adventure",
                imagen: "https://m.media-amazon.com/images/M/MV5BMzIyNzY4NTMtNmVhYS00OWFhLTkwMWMtOGFkNTdmNWU2ZDdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
              },
              {
                id: 5,
                titulo: "Death Note",
                imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/250px-Death_Note_Vol_1.jpg"
              }
            ]}
          />

          {/* Estilo extra solo si el componente tiene el color 'white' fijo por dentro */}
          <style>{`
    .custom-black-text p {
      color: black !important;
    }
  `}</style>
        </div>


      </div>
    </>
  )
}

/*

  
  { id: 4, titulo: "jojo's bizarre adventure", imagen: "https://m.media-amazon.com/images/M/MV5BMzIyNzY4NTMtNmVhYS00OWFhLTkwMWMtOGFkNTdmNWU2ZDdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 5, titulo: "Death Note", imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/250px-Death_Note_Vol_1.jpg" },
*/