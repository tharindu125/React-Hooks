import { createContext, useState  } from "react";
import Child1 from "./Children/Child1";

export const CountContext = createContext(0)

export default function Parent() {

    const [count, setCount] = useState(0);

    return(
        <CountContext.Provider value={count}>
            <hr style={{color:'red', margin: '30px 5px'}}></hr>

            <div  className="main">
                <h1>UseContext</h1>
            </div>

            <Child1/>
            <h1 className='m2'>{count}</h1>
            <div className="m3">

                <button onClick={() => setCount(count +1)}>
                    ADD
                </button>

            </div>
            
        </CountContext.Provider>
    )
}