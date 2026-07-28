import React, { useEffect, useState } from 'react';

const FetchBasicAuthExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const username = 'your_username';
    const password = 'your_password';
    
    // 1. Encode credentials into a Base64 string
    const encodedCredentials = btoa(`${username}:${password}`);

    // 2. Pass the encoded credentials into the Authorization header
    fetch('https://example.com', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response failed');
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

export default FetchBasicAuthExample;
