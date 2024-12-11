 import React, { useEffect, useState } from 'react';
 import Card from '../component/Card.jsx'
 import "../styles/Card.css";
 import Founter from '../component/Founter'
 



function Party () {
  const [card, setCard] = useState([]); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:4300/products//getAll?tag=pt")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        
        if (Array.isArray(data)) {
          setCard(data);
        } else {
          console.error("Invalid data format received from server", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
 }
  return (
    <>
      <div className='new'>
        
        <h1></h1>
      </div>

      <div className='newArr'>
        {card.map((product, id) => (
          <Card
            id={product._id} // Use a unique identifier from product if available
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
            alt="image"
         ></Card> 
        ))}
      </div>
<Founter/>
    </>
  );
}

export default Party;

