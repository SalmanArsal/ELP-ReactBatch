import React from 'react'

const Gallery = ({image, title, desc}) => {
  return (
   <div className="card" style={{width:"16rem"}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Gallery