import React, { useState } from 'react'

export default function UseState() {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Start of the bar");
    
    const changeCount = (operation) =>{
        if(operation === 'Add'){
            if(count < 10) setCount(count +1);
            if(count > 4 && count <= 9) setMessage("End of the bar");
        }else{
            if(count > 0) setCount(count - 1);
            if(count < 4 && count >= 0) setMessage("Start of the bar");
        }
    };

    const renderbar = () => {
        const bars = [];

        for(let i = 0; i < count; i++){
            bars.push(
                <div 
                style={{
                    backgroundColor:'rgba(212,113,211,0.6)',
                    border: '0.1rem solid rgba(0,0,0,0.4)',
                    height: '100%',
                    width:'10%',
                }}></div>
            )
        }

        return bars
    }
    
  return (
    <div>
        <h1 
            style = {{
                color:'orange',
                fontSize:'40px',
                display:'flex',
                justifyContent:'center'
            }}>Use State</h1>
            <h1 
            style = {{
                color:'green',
                fontSize:'20px',
                display:'flex',
                justifyContent:'center'
            }}>{message}</h1>
        <div
            style={{
                border: '0.1rem solid rgba(0,0,0,0.4)',
                height: '100px',
                width:'80%',
                margin : '2rem auto',
                display: 'flex',
            }}>
            
            {renderbar()}

        </div>

        <button 
            style={{
                backgroundColor: 'rgba(215,1,2)',
                padding: '5px 13px',
                fontSize:'17px',
                border:'0.1px',
                margin: '5px 5rem',
                borderRadius:'5px',
            }}
            onClick={() => changeCount('Add')}>
            Add
        </button>
        <button
            style={{
                backgroundColor: 'rgba(230,230,2)',
                padding: '5px 13px',
                fontSize:'17px',
                border:'0.1px',
                margin: '5px auto',
                borderRadius:'5px',
            }}
            onClick={() => changeCount('Remove')}>
            Remove
        </button>
    </div>
  )
}
