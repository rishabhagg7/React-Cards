import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCards(data)
      })
      .catch((err)=>{
        console.error('Error fetching data:', err);
      })
  },[])
  

  return (
    <>
      <div className="card-container">
        {
          cards.map((card) => {
            return <Card card={card} key={card.id}/>
          })
        }
      </div>
    </>
  )
}

export default App
