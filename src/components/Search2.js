
import React, { useState } from 'react';
import axios from 'axios';

const Search2 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://quotes-vfas.onrender.com/quote?query=${searchQuery}`);
      const data = response.data; // Assuming your AI endpoint returns data in JSON format
      
      // Filter the results based on the search query
      const filteredResults = data.filter(post =>
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className='search'>
      Search by author -
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {
         searchResults.length?
         searchResults.map(post=><div key={post.id}><ul> 
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
  );
};

export default Search2;
