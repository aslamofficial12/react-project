"use client";
import { useSearchParams } from "next/navigation";


export default function Success() {
    
const params = useSearchParams();
 const name = params.get("name");
 const email = params.get("email");
 const diabetes = params.get("diabetes");
 
  return (
    <div>
      <h1>Thank You!</h1>
      <h3>Name: {name}</h3>
      <h3>email: {email}</h3>
      <h3>Daibetes type: {diabetes}</h3>
      <p>Your subscription was successful added
      </p>
    </div>
  );
}