// import React, { useEffect, useState } from 'react';

// function CheckApi() {
//   const [card, setCard] = useState([]);

//   useEffect(() => {
//     console.log("Fetching data from API...");
//     fetch("http://localhost:4300/products/getproductdetails")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched data:", data);
//         // Access the products array within the data object
//         setCard(data.data); // Set the card state to the products array
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <>
//       {card.length > 0 ? (
//         card.map((product) => (
//           <div key={product.id} className="product-card">
//             <h2>{product.description}</h2>
//             <img src={product.image} alt={product.description} />
//             <p>Tag: {product.tag}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products available.</p>
//       )}
//     </>
//   );
// }

// export default CheckApi;
