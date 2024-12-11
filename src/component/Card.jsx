import React from 'react';
import  "../styles/Card.css";
import { Link } from 'react-router-dom';

function Card({image,title,rating,price,alt,id}) {
  
  console.log(image)
  
   return (
     <>
<Link to={`/Productdetails?id=${id}`}>
 <div className="comp1">
  
      <img className="a1" src={image} alt={alt} width="300px" ></img>
      <div>
      <h4 className="title">{title}</h4>
      <img  className="rating" src={rating} alt={alt} width="300px"></img>
      <h5 className="price">{price}</h5>

      </div>

      </div> 
      </Link>
    </>
   )
 }





export default Card