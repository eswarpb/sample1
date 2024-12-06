import React,{useState} from "react";
import '../../App.css'

export default function Lfecycle(){
    const [text,setText] =useState(0)
    const handleButtonIncreament=()=>{
        setText(text+1)
    }
    const handleButtonDecrement=()=>{
        setText(text-1)
    }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleButtonDecrement}>-</button>
            <button onClick={handleButtonIncreament}>+</button>    
        </div>
    );
}