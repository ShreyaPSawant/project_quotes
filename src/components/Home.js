


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [randomEntry, setRandomEntry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let savedQuote = localStorage.getItem('savedQuote');
        
        if (!savedQuote) {
          const response = await axios.get('https://quotes-vfas.onrender.com/quote');
          const data = response.data;
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomItem = data[randomIndex];
          savedQuote = JSON.stringify(randomItem);
          localStorage.setItem('savedQuote', savedQuote);
        }

        setRandomEntry(JSON.parse(savedQuote));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='heading'>Quote Of The Day</h1>
      {randomEntry ? (
        <div className='singlelistitem'>
          <div className='quote'>
            <li className='listitem'>{randomEntry.quote}</li>
          </div>
          <div className='author'>
            <p className='colour'>~{randomEntry.author}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;


