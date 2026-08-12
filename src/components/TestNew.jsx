"use client";

import { useEffect, useState } from "react";

export default function ClientPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch('https://dummyjson.com/user/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60
  }),
  
})
.then(res => res.json())
.then(console.log);



})





  if (loading) return <p>Loading...</p>;

  return <> <div>{JSON.stringify(data)}</div></>;
}
