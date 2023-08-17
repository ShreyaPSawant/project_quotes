import React, {Component} from 'react'
import axios from 'axios'
import './styles/styles.css'
import {Link} from 'react-router-dom'
import ByAuthor from './ByAuthor'

class Author2 extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            posts:[]
        }
    }

    componentDidMount()
    {
        axios.get('https://quotes-vfas.onrender.com/quote')
        .then(Response=>{
            console.log(Response)
            this.setState({posts:Response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errors:'error in retrieving'})
        });
    }

    render()
        {
            const {posts}=this.state
            return(
                <div>
                  <h1 className='subheading'>Authors</h1>
                  
                   {
                         posts.length?
                         posts.map(post=><div key={post.id}><ul>
                         <div className='authorlink'> <li > <Link to={`/ByAuthor?author=${encodeURIComponent(post)}`}  state={post}>{post.author}</Link> </li></div> </ul></div>):
                         null
                         
                    } 
                    
                </div>
            )
        }
    
}

export default Author2


