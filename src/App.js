import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios' ;
import './App.css' ;
export default function App()
{
    const[advice,setAdvice]=useState("");
    useEffect(()=>
    {
      fetchadvice() ;
    },[setAdvice])

    async function fetchadvice(){
      try{
      const response=await fetch('https://api.adviceslip.com/advice')
      const data= await response.json() ;
     
      console.log("advice is",data.slip.advice) ;
      setAdvice(data.slip.advice) ;
      }
      catch(err){
   
      }
    }
 return(
 <div className="app">
   <div className="card">
   <h1 className="heading">{advice}</h1> ;
   <button className="button"
   onClick={()=>fetchadvice()}>
      <span>
      GIVE ME ADVICE
      </span> 
         </button>
   </div>
  
    
 </div>)
}


