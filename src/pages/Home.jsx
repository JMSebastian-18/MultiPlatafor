import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'

export const Home = () => {
  return (
    <>
      <div style={{
        backgroundImage: "url('https://media.revistagq.com/photos/604b2f499fc97c95e82c1c14/16:9/w_1600,c_limit/2101913.jpg')",
        backgroundSize: "cover",
        minHeight: "633px",
        position: "relative"
      }}>
        <Header />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.9), transparent)"
        }} />

        <BannerInicio />
        <ListaPopular
        peliculas={[
            {
              id: 1,
              titulo: "Dectetive Pikachu",
              imagen: "https://framerusercontent.com/images/UcRi5rpbxAG85yQHnPz2YiDsPU.png"
            },
            {
              id: 2,
              titulo: "Batman",
              imagen: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=300"
            },
            {
              id: 3,
              titulo: "Linterna verde",
              imagen: "https://i.pinimg.com/236x/67/20/18/672018e1ab673174bb1f917197dbe6e4.jpg"
            },
            {
              id: 4,
              titulo: "Green Aliens",
              imagen: "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2024/08/01/imagen-promocional-de-alien-isolation.jpeg"
            },
            {
              id: 5,
              titulo: "King Kong",
              imagen: "https://m.media-amazon.com/images/M/MV5BMWY0NWE0ZjUtNjRlOS00ZDViLTgxNTQtMGMwN2FhNDY1YTg2XkEyXkFqcGc@._V1_.jpg"
            },
            {
              id: 6,
              titulo: "Godzilla",
              imagen: "https://es.web.img3.acsta.net/pictures/14/03/04/12/38/124399.jpg"
            }
            
          ]}
        
        />


      </div>
    </>
  )
}
