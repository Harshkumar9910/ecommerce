// import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { data6 } from '../constant/Data';
// // import Like from '../component/Like';
// import Card2 from "../component/card2";
// import "../styles/Shop.module.css";
// import Founter from '../component/Founter';
// import Card from './Card';

// function Productdetails() {
//   const [A, setA] = useState(1);
//   const pricePerUnitA = 1;

//   const incrementA = () => {
//     setA(quantity => quantity + 1);
//   };

//   const decrementA = () => {
//     setA(quantity => (quantity >= 1 ? quantity - 1 : 1));
//   };

//   // Calculate total price
//   const totalPrice = (A * pricePerUnitA);

//   const {useSearchParams}=useSearchParams();
//   const ProductId = useSearchParams.get("id")
//   const [details,setDetails]=useState({})


//   return (
//     <>
//     <hr></hr>
//     <p className='in'>Home > Shop > Mens > T-Shirts</p>
//           <img className="burst"src='/images/teshirt.jpeg'></img>

//       <div className="shirtttt">
//         {data6.map((product, index) => (
//           <Card2 
//           key={Card.id}
          
//             image={product.image} 
//             title={product.title}  
//             rating={product.rating} 
//             price={product.price} 

//           />
//         ))}
//       </div>
//       <p className='l2'>This graphic t-shirt is perfect for any occasion. Crafted from a soft and <br /> breathable fabric for superior comfort and style.</p>
//       <hr className='line' />
//       <p className='l1'>Select Colors</p>
//       <button className='bt'></button>
//       <button className='bt1'></button>
//       <button className='bt2'></button>
//       <hr className='line' />
//       <p className='l1'>Choose Size</p>
//       <button className='btt'>Small</button>
//       <button className='btt1'>Large</button>
//       <button className='btt2'>Medium</button>
//       <button className='btt3'>X-large</button>
//       <hr className='line' />
      
//       <div className='bttt1'>
//         <button onClick={decrementA}> -</button>
//         <span>{A}</span>
//         <button onClick={incrementA}> +</button>
//       </div>
//       <div className='btt1'>

//       <button className='crt'>Add to Cart</button>
// </div>
//       <h3 className='prag1'>Product Details</h3>
//       <hr className='line3' />
//       <p className='prag'>
//         Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape 
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge
//          Sleek and timeless. Titanium glasses with an innovative bridge
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape

//       </p>
//       <p className='prag'>Sleek and timeless. Titanium glasses with an innovative bridge
//         Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape 
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge
//          Sleek and timeless. Titanium glasses with an innovative bridge
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape
//          Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape</p>
//       <p className='prag'>
//         .99.7% pure titanium front<br />
//         .More than 4h on the Vickers hardness test.<br />
//         .Lon plated to over 0.3q<br />
//         .Weighs under 5.0g<br />
//         .Adjustable titanium nose pad for a comfortable fit<br />
//         .UV protection<br />
//       </p>
//       <hr className='line3'/>
//       <h1 className='alsolike'>YOU MIGHT ALSO LIKE</h1>
//    <Founter/>
      
//     </>
//   );
// }

// export default Productdetails;
// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { data6 } from '../constant/Data';
// import Card2 from "../component/card2";
// import "../styles/Shop.module.css";
// import Founter from '../component/Founter';

// function Productdetails() {
//   const [A, setA] = useState(1);
//   const pricePerUnitA = 1;

//   const incrementA = () => {
//     setA(quantity => quantity + 1);
//   };

//   const decrementA = () => {
//     setA(quantity => (quantity > 1 ? quantity - 1 : 1));
//   };

//   // Calculate total price
//   const totalPrice = A * pricePerUnitA;

//   const [searchParams] = useSearchParams();
//   const ProductId = searchParams.get("id");
//   const [details,setDetails]=useState({})
//   // If you need to fetch product details using ProductId, do it here.


//   useEffect(()=>{
//     console.log(ProductId);
//     setDetails();
    
//   })

//   return (
//     <>
//       <hr />
//       <p className='in'>Home > Shop > Mens > T-Shirts</p>
//       <img className="burst" src='/images/teshirt.jpeg' alt="T-Shirt" />

//       <div className="shirtttt">
//         {data6.map((product) => (
//           <Card2 
//             key={product.id} // Use product.id here
//             image={product.image} 
//             title={product.title}  
//             rating={product.rating} 
//             price={product.price} 
            
//           />
//         ))}
//       </div>
//       <p className='l2'>
//         This graphic t-shirt is perfect for any occasion. Crafted from a soft and <br /> breathable fabric for superior comfort and style.
//       </p>
//       <hr className='line' />
//       <p className='l1'>Select Colors</p>
//       <button className='bt'></button>
//       <button className='bt1'></button>
//       <button className='bt2'></button>
//       <hr className='line' />
//       <p className='l1'>Choose Size</p>
//       <button className='btt'>Small</button>
//       <button className='btt1'>Large</button>
//       <button className='btt2'>Medium</button>
//       <button className='btt3'>X-large</button>
//       <hr className='line' />
      
//       <div className='bttt1'>
//         <button onClick={decrementA}> -</button>
//         <span>{A}</span>
//         <button onClick={incrementA}> +</button>
//       </div>
//       <div className='btt1'>
//         <button className='crt'>Add to Cart</button>
//       </div>
//       <h3 className='prag1'>Product Details</h3>
//       <hr className='line3' />
//       <p className='prag'>
//         Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic 'panto' shape.
//       </p>
//       <p className='prag'>Sleek and timeless. Titanium glasses with an innovative bridge...</p>
//       <p className='prag'>
//         .99.7% pure titanium front<br />
//         .More than 4h on the Vickers hardness test.<br />
//         .Lon plated to over 0.3q<br />
//         .Weighs under 5.0g<br />
//         .Adjustable titanium nose pad for a comfortable fit<br />
//         .UV protection<br />
//       </p>
//       <hr className='line3' />
//       <h1 className='alsolike'>YOU MIGHT ALSO LIKE</h1>
//       <Founter />
//     </>
//   );
// }

// export default Productdetails;


import React from 'react'
import Banner from '../component/Banner'

function Shop() {
  return (
<Banner/>
)
}

export default Shop