import React from 'react'

export const BannerInicio = ({
  badge = "SLOTHUI ORIGINAL",
  title = "RISE OF X",
  year = "2028",
  seasons = "82 Seasons",
  rating = "TV-MA",
  description = "In a world where AI and humans coexist, X_AE_A-22 embarks on a journey of self-discovery and power.",
}) => {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1, padding: "3rem", color: "white", maxWidth: "500px" }}>
        <small style={{ color: "#e8c840" }}>{badge}</small>
        <h1 style={{ fontSize: "4rem", margin: "0.5rem 0" }}>{title}</h1>

        <div className="mb-2">
          <span className="badge border me-1">{year}</span>
          <span className="badge border me-1">{seasons}</span>
          <span className="badge border">{rating}</span>
        </div>

        <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "1rem" }}>
          {description}
        </p>

        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-warning fw-bold rounded-pill px-4">Play</button>
          <button className="btn btn-secondary rounded-pill px-4">More Info</button>
        </div>
      </div>
    </>
  )
}