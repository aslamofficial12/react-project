"use client";
import {useState} from 'react';
export default function home(){
    const[timer,setTimer]=useState(true);
    function timer(){
        setTimeout(()=>{
            console.log("session will be expire on 10 minutes without user interaction")
        },1000)
    }
    return(
        <>
        <h2>user information</h2>
        
        </>
    );
}