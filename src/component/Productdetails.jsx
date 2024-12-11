
  import React, { useEffect, useState } from 'react';
  import { useSearchParams, useNavigate } from 'react-router-dom';
  import styles from '../styles/ProductDetails.css'
  import Founter from '../component/Founter'



function Productdetails() {
  const [searchParams] = useSearchParams();
  const product_Id = searchParams.get('id');
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('green');
  const [selectedSize, setSelectedSize] = useState('Small');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4300/products/getSingleProduct?id=${product_Id}`)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => setProductDetails(data))
      .catch(error => console.error("Error fetching data:", error));
  }, [product_Id]);

  const handleIncrement = () => {
    console.log("Increment clicked");
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      console.log("New Quantity:", newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    console.log("Decrement clicked");
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : prevQuantity;
      console.log("New Quantity:", newQuantity);
      return newQuantity;
    });
  };
  const handleAddToCart = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please log in to add products to the cart.");
      navigate("/Loginpage");
      return;
    }

    try {
      const cartItem = {
        product_id: product_Id,
        color: selectedColor,
        size: selectedSize,
        quantity,
      };

      const response = await fetch("http://localhost:4300/cart/addToCart", {
        method: "POST",
        headers: {
          Authorization:` Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate("/cart");
      } else {
        alert(result.message || "Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Something went wrong. Please try again later.");
    }
  };


  if (!productDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
   

<div className="div0">
        <br />
        <div className="hhhl">
          <p>{productDetails.mainheading}</p>
        </div>
        <img className="gtshirt0" src={productDetails.image1} alt="" />
        <img className="gtshirt20" src={productDetails.image2} alt="" />
      </div>

      <div>
        <img className="gtshirt30" src={productDetails.image3} alt="" />
      </div>

      <div className="full0">
        <img className="paw0" src={productDetails.image4} alt="" />
      </div>

      <div>
        <h1 className="heading0">{productDetails.heading1}</h1>
      </div>

      <div>
        <img className="rating0" src={productDetails.image5} alt="" />
      </div>

      <h1 className="price0">${productDetails.price1}</h1>
      <p className="price20">${productDetails.price2}</p>
      <p className="para0">{productDetails.para1}</p>

      <div className="color0">
        <p className="kal">Select Color:</p>
        {['green', 'Black', 'Blue', 'red'].map((color) => (
          <button
            key={color}
            className={`color-button ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: selectedColor === color ? color : '' }}
            onClick={() => setSelectedColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <p className="oops">select size:</p>  

      <div className="color20">
        {['Small', 'Medium', 'Large', 'XXL'].map((size) => (
          <button
            key={size}
            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
     
<div className='minn1'>
        <button className="minus0" onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button className="plus0" onClick={handleIncrement}>+</button>
        </div>
      <button className="mn0" onClick={handleAddToCart}>
        Add to Cart
      </button>

      <p className="details0">{productDetails.para2}</p>
      <div className="hr0" />
      <p className="txt0">{productDetails.para3}</p>
      <p className="txt0">{productDetails.para4}</p>

      <div className="hr0" />
      <h3 className="might0">
        <center>{productDetails.heading3}</center>
</h3>
<Founter/>
    </>
  );
}

export default Productdetails;
