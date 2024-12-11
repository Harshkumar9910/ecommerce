import React from 'react'
import "../styles/Banner.css";

function Banner() {
    return (
        <>
            <div className='banner'>
                <div>

                    <h1 className='aman'>FIND CLOTHES</h1>
                    <h1 className='aman1'>THAT MATCHES</h1>
                    <h1 className='aman2'>YOUR STYLE</h1>

                </div>
                <div className='john'>

                <h1 className='port'><p> browse though our diverse range of meticulously crafted garments,designed </p></h1> 
          <h1 className='folio'><p> to bring out your individuality and cater to your sense of style.</p></h1>  </div>
         
          <button className='PP'> shop Now</button>
            <div className='vansh'>
                <h1 className='public'> 200+</h1>
                <h3 className='tt1'> Internation Brands</h3>
            </div>

            <div className='school'>
                <h1 className='three'> 2,000+</h1>
                <h3 className='low'> High-quality products </h3>

            </div>

            <div className='onetick'>
                <h1 className='ds'> 30,000+</h1>
                <h3 className='nj'> Happy customers</h3>

            </div>
           
             <img className='homeImg' src='/Image/Rectangle_2-removebg-preview 1.png' width="850px"></img>
             <div className='karan'>
                <img  className="zara"src='/Image/zara.png'></img>

            </div>
           
            </div>
           



        </>
    )
}

export default Banner