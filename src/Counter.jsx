import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd =() =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleMinus = () =>{
        if(count > 0){
            const newCount = count -1;
            setCount(newCount);
        }
    }
    return (
        <>
          <h2>This is a time clock: {count}</h2>
          <button style={{border: '2px solid green'}} onClick={handleAdd}>Add</button>
          <button style={{border: '2px solid green'}} onClick={handleMinus}>Reduce</button>

        </>
    )
}