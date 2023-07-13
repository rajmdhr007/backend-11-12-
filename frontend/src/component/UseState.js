import React, { useEffect, useState } from 'react'

const UseState = () => {
    // Hooks
    // UseState=>it is used to manage the state of value
    // UseEffect=>to show effect when the state changes
    // UseContext
    // UseRef
    // UseMemo
    const[count,setCount]=useState(0)
    const [c,setC]=useState(10)
    useEffect(()=>{
        alert("value changed")

    },[c])
    // const[variable,function]=useState(initialValue)
    // (0-9)=>Number
    // ("ram")=>String
    // {}=>object
    // []=>array
    // const addItem=()=>{
    //     setCount(count+1)
    // }
    const decreaseItem=()=>{
        setCount(count-1)
    }

  return (
    <>
    <div>count:{count}</div>
    {
        count<10 &&  <button onClick={()=>{
            setCount(count+1)
        }}>Increase value</button>
    }
    {
         count>0 && 
    <button onClick={decreaseItem} >Decrease value</button>
       
    }

    <h1>{c}</h1>
    {
        c<100 && <button onClick={()=>setC(c+10)}>increase</button>
    }
    {
        c>0 && <button onClick={()=>setC(c-10)}>decrease</button>

    }

   
    </>
  )
}

export default UseState