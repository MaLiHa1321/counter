import { useEffect, useState } from "react";
import BottleDes from "./BottleDes";
import './Bottle.css'


const Bottles = () => {
    const [bottle, setBottle] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottle(data))
    },[])

   const handleAdd = (bottle) =>{
     const newCart = [...cart, bottle];
     setCart(newCart);
   }
    return (
        <>
        <h2>Bottle add to cart:{cart.length}</h2>
        <div className="bottle-container">
        
            {
                bottle?.map((bottle) => <BottleDes key={bottle?.id} bottel={bottle} handleAdd={ handleAdd}></BottleDes>)
            }
            
        </div>
        </>
    );
};

export default Bottles;