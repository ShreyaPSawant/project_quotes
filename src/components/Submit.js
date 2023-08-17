import React, {Component} from 'react'
import axios from 'axios'
import './styles.css'
import Search from './Search'

class Submit extends Component{
    constructor(props)
    {
        super(props)
        this.state={
           message:props.message,
            post:[]
        }
    }

    componentDidMount()
    {
        axios.get('https://quotes-vfas.onrender.com/quote')
        .then(Response=>{
            console.log(Response)
            this.setState({post:Response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errors:'error in retrieving'})
        });    
    }

    render()
        {
            const {post}=this.state
            return(
                <div>
                  <h1 className='subheading'>Authors</h1>
                    
                    {
                        post.author===this.message?
                        post.map(post=><div key={post.id}><ul> 
                            <div  className='singlelistitem'>
                               <div className='quote'>  
                                <li className='listitem' >{post.quote}    </li> 
                               
                              </div>  
                               <div className='author'><p className='colour'>~{post.author}</p> 
                               </div>
                          </div> 
                          </ul></div>): 
                        null
                    }
                    
                    
                </div>
            )
        }
    
}

export default Search