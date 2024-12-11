import React, { useEffect, useState } from 'react';
import Card from './Card';
import "../styles/Card.css";




function Topselling() {
  const [card, setCard] = useState([]); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:4300/products//getAll?tag=ts")
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
      <div className='tew'>
        
        <h1>Topselling</h1>
      </div>

      <div className='newArr'>
        {card.map((product, id) => (
          <Card
            id={product._id} 
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
            alt="image"
         ></Card> 
        ))}
      </div>

    </>
  );
}

export default Topselling;


// import React, { useState, useEffect } from 'react';

// function TextSync() {
//   const [secondBoxText, setSecondBoxText] = useState('');
//   const [firstBoxText, setFirstBoxText] = useState('');

 
//   useEffect(() => {
//     setFirstBoxText(secondBoxText);
//   }, [secondBoxText]);

//   return (
//     <div>
//       <h2>Type in the second box to see it in the first box:</h2>

   
//       <input
//         type="text"
//         value={firstBoxText}
//         placeholder="Text will appear here"
//         readOnly
//       />

//       <br /><br />

     
//       <input
//         type="text"
//         value={secondBoxText}
//         onChange={(e) => setSecondBoxText(e.target.value)}
//         placeholder="Type here"
//       />
//     </div>
//   );
// }

// export default TextSync;