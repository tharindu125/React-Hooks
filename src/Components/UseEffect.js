import React, {useState, useEffect} from 'react';

export default function UseEffect() {
     
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("changed!...")
    },[count]);

    useEffect(() => {
        console.log("Change Twice!...")
    },[count2]);

    return(
        <div>
            <div>
                <h1>UseEffect</h1>
            </div>
            <div>
                <h1>{count}</h1>
                <h1>{count2}</h1>
            </div>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    ADD by one
                </button>
                <button onClick={() => setCount2(count +2 )}>
                    ADD by two
                </button>
            </div>

        </div>
    )
}