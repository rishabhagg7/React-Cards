import React from 'react'
import './Card.css'

const Card = ({card}) => {
  return (
    <div className="card">
      <span className="userId">{card.userId}</span>
      <h1 className="title">{card.title}</h1>
      <p className="description">{card.body}</p>
    </div>
  )
}

export default Card