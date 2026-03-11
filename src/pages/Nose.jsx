import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'


export const Nose = () => {
  return (
    <>
      <div style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/grunge-yellow-breaking-bad-poster-bkbu0hjpevu9ouog.jpg')",
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
          title="BREAKING BAD"
          year="2008"
          seasons="5 Seasons"
          rating="TV-MA"
          description="A high school chemistry teacher diagnosed with terminal cancer teams up with a former student to manufacture methamphetamine, descending into the criminal underworld to secure his family's future."
        />

        <ListaPopular
          peliculas={[
            { id: 1, 
              titulo: "Merlina", 
              imagen: "https://www.tornamesa.co/imagenes/9786287/978628768860.webp" },
            { id: 2, 
              titulo: "Stranger Things", 
              imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKUl5aPjgK8YRHuquJd9hqPwkGNGHIkTtVg&s" },
            { id: 3, 
              titulo: "The Last of Us", 
              imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrGWo2txPhX9aMp0klBBeL-Qsn0SfwlDiQQ&s" },
            { id: 4, 
              titulo: "Squid Game", 
              imagen: "https://upload.wikimedia.org/wikipedia/en/3/38/Squid_Game_season_2_poster.png" },
            { id: 5, 
              titulo: "The Boys", 
              imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDgJAwVM8FO6Bn9OdPS_y6TgL42gleSZ5MQ&s" },
          ]}
        />

      </div>
    </>
  )
}

