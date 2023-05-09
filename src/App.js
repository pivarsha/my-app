import './App.css';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://source.unsplash.com/random/200x200?sig=1');
        const data = await response.blob();
        const imageUrl = URL.createObjectURL(data);
        setImageURL(imageUrl);
      } catch (error) {
        
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {imageURL ? (
        <img src={imageURL} alt="Fetched" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};



export default App;