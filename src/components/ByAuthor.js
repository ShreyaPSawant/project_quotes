import { useLocation } from 'react-router-dom';
import React,{Component} from "react";
import './styles/styles.css'

function ByAuthor() {
 
 const location = useLocation()
const searchParams = new URLSearchParams(location.search);

const searchAuthor = searchParams.get('post');

const post = location.state
console.log('State - ', post)
console.log(searchAuthor)


  return (
     <div>
        {/* {post.quote} */}
        <div  className='singlelistitem'>
        <div className='quote'>  
         <li className='listitem' >{post.quote}    </li> 
        
       </div>  
        <div className='author'>
        <p className='colour'>~{post.author}</p> 
        </div>
   </div> 
     </div>
   
  );
}

export default ByAuthor