// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
