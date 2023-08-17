import React from 'react'
import {Link} from 'react-router-dom'
import './styles/styles.css'

function Navbar()
{
    return(
        <div >
        <h1 className='heading'>
            SOFTWARE QUOTES
        </h1>
        <nav className='container'>
         <div className='navoption'><Link to='/quote-of-day'>Home</Link></div>  
         <div className='navoption'><Link to='/author'>Authors</Link></div>
         <div className='navoption'><Link to='/quote'>Quotes</Link></div>
        
           
            
        </nav>
        </div>
        
    )
}
export default Navbar