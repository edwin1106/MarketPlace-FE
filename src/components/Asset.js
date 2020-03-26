import React from 'react'

const Asset = ({title, description,tag,imageURL }) => {  
  return (    
    <div className="col-md-4 mb-4">
      <div className="card h-100">
          <img src={imageURL} className="card-img" alt={"..."} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">{tag}</small></p>
          </div>
      </div>
    </div>
  )
}
export default Asset
