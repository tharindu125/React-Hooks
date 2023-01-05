import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
 
export default function UseEffect() {
     
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("changed!...")
    },[count]);

    useEffect(() => {
        console.log("Change Twice!...")
    },[count2]);

    /*pick a  box*/
 
    const [showStatement, setStatement] = useState(false);
    const [boxPicked, setBoxPicked] = useState(0);
    const [image, setImage] = useState('');
  
    useEffect(() => {
        setTimeout(() => {
            setStatement(true);
        },2000);
    }, []);

   useEffect(() => {
        if (boxPicked === 0){
            setImage('');
        }else{
            fetchImage(boxPicked);
        }
   }, [boxPicked]);

   const fetchImage = async (boxId) => {
        if(boxId === 1){
            const response = await axios.get(
                    'https://randomfox.ca/floof/?ref=apilist.fun'
            );
            setImage(response.data.image);
        }else if (boxId === 2){
            const response = await axios.get(
                'https://aws.random.cat/meow?ref=apilist.fun'
            );
        setImage(response.data.file);
        }else if (boxId === 3 ){
            const response = await axios.get(
                'https://dog.ceo/api/breeds/image/random'
            );
        setImage(response.data.message);
        }
   };

    return(
        <div>
        <hr/>
            <div className='main'>
                <h1>UseEffect</h1>
            </div>
            <div className='m2'>
                <h1>{count}</h1>
                <h1>{count2}</h1>
            </div>
            <div className='m3'>
                <button onClick={() => setCount(count + 1)}>
                    ADD by one
                </button>
                <button onClick={() => setCount2(count +2 )}>
                    ADD by two
                </button>
            </div>

            {/* pick a box */}
            <div className='main2'>
            {showStatement && (
                <>
                <h1 className='scary-text'>Pick A Box</h1>
                <div className='box-container'>
                    <div id="1" className='box' onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
                        <h2>1</h2>
                    </div>
                    <div id="2" className='box' onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
                        <h2>2</h2>
                    </div>
                    <div id="3" className='box' onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
                        <h2>3
                        </h2>
                    </div>
                </div>
                </>
            )}
            {image && (
                <img src = {image} className="animal-image"/>
            )}
            </div>
            
        </div>
    );
}