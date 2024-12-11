

import React from 'react'
import "../styles/Browse.css"
import { Link } from 'react-router-dom'




  
 
function Browse() {
  return (
    <>
    <div className='dress'>
        <div className='.portt-div'>
        <h1 className='brows'>BROWSE BY DRESS STYLE</h1>
        <Link to="/Casual"><h1 className='casualboy'><img src='/Image/Frame 61.png' width="400px" height="340px"></img></h1></Link>
        <Link to="/Formal"><h1 className='formalboy'><img src='/Image/Frame 62.png' width="800px"></img></h1></Link>
        <Link to="/Gym"> <h1 className='partygirl'><img src='/Image/Frame 63.png' width="600px" height="390px"></img></h1></Link>
       <Link to="/Party"> <h1 className='gymboy'><img src='/Image/Frame 64.png'  width="420px" height="390px"></img></h1></Link>


    </div>
    
    </div>
    </>
  )
}



export default Browse