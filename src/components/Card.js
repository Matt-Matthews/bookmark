import React from 'react'
import '../css/style.css'

export default function Card(props) {


  return (
     <div className="cards">
         {props.items.map((item) =>{
             return <div key={item.id} className="card">
             <img className="langImg" src={`./images/${item.imageUrl}`} alt={item.language} />
             <h1>{item.language}</h1>
             <button onClick={()=>props.addBookmark(item.id)} >{
             props.isBookmarked ?
             <img className="img" src="./images/close.png" alt="Bookmark" /> 
             : <img className="img" src="./images/bookmark.png" alt="Bookmark" />}</button>
         </div>
         })}
     </div>
    
  )
}
