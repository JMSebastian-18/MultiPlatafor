import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'



export const Music = () => {
  return (
    <>
      <div style={{
        backgroundImage: "url('https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/GettyImages-1134174738_usp8rm/kendrick-lamar-photo-by-santiago-bluguermann-getty-images.jpg')",
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
          title="THE WEEKND"
          year="2020"
          seasons="After Hours"
          rating="Explicit"
          description="Abel Tesfaye, known as The Weeknd, delivers a dark and cinematic journey through heartbreak, fame, and self-destruction in his critically acclaimed album After Hours."
        />


        <ListaPopular
          peliculas={[
            {
              id: 1,
              titulo: "Mr. Morale & The Big Steppers",
              imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Qxkuk53yToS2nOFr7x1BgNWX4BXS9ECJ5w&s"
            },
            {
              id: 2,
              titulo: "To Pimp a Butterfly",
              imagen: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png"
            },
            {
              id: 3,
              titulo: "DAMN.",
              imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Kendrick_Lamar_-_Damn.png/250px-Kendrick_Lamar_-_Damn.png"
            },
            {
              id: 4,
              titulo: "good kid, m.A.A.d city",
              imagen: "https://akamai.sscdn.co/uploadfile/letras/albuns/9/8/3/d/1108011715170045.jpg"
            },
            {
              id: 5,
              titulo: "Section.80",
              imagen: "https://fmhiphop.com/wp-content/uploads/2021/07/EAO7i6Z-1.jpg"
            },
            {
              id: 6,
              titulo: "untitled unmastered",
              imagen: "https://i.ytimg.com/vi/aH2UaivzPvs/maxresdefault.jpg"
            }
          ]}
        />
      </div>
    </>
  )
}
