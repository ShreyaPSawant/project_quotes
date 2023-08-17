import React, {Component} from 'react'
import axios from 'axios'
import './styles/styles.css'
import Search2 from './Search2';


class Quotes2 extends Component{
    constructor(props)
    {
        super(props)
        this.state={
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
            // const {names}=this.state
            return(
                <>
                <div>
                       <Search2/>
                  <h1 className='subheading'>Quotes</h1>
                    
                    {
                        post.length?
                        post.map(post=><div key={post.id}><ul> 
                            <div  className='singlelistitem'>
                               <div className='quote'>  
                                <li className='listitem' >{post.quote}    </li> 
                               
                              </div>  
                               <div className='author'>
                               <div ><img src={require('./images/like (1).png')} alt='img' height='30px' width='30px' ></img>- {post.likes}</div>
                               <p className='colour'>~{post.author}</p> 
                               </div>
                          </div> 
                          </ul></div>): 
                        null
                    }
                    
                    
                </div>
                </>
                
            )
        }
    
}

export default Quotes2


// import React, {Component} from "react";

// import axios from 'axios'

// import './styles.css'




// class Quotes2 extends Component{

//     constructor(props){

//         super(props)

//          this.state ={

//             posts: [],

//             errors: ''

//          }

//         }

//  componentDidMount(){

//     axios.get('https://quotes-vfas.onrender.com/quote')

//     .then(response => {

//         console.log(response)

//         this.setState({posts:response.data})

//     })

//     .catch(error => {

//         console.log(error)

//         this.setState({errors: 'error in retreiving'})

//     })

// }




// render(){

//     const {posts, errors} =this.state

//     return (

//     <div>

//     {

//         posts.length ?

//         posts.map(post => <div key={post._id} class='b' >{post.quote} <div class='ov'>Likes- {post.likes} </div><div class='ov'>Dislikes- {post.dislikes} </div><div class='oval'> - {post.author} <br/> </div></div> ) : null

//     }

//     {

//         errors ? <div>{errors}</div> : null

//     }

//     </div>

//     )

// }

// }

// export default Quotes2