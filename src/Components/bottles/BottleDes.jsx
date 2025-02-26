import './Bottle.css';

const BottleDes = ({bottel,handleAdd}) => {
      const {img,id,name,price,ratings} = bottel;
    return (
        <div className="bottel">
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <button onClick={handleAdd}>Purchase</button>
            
        </div>
    );
};

export default BottleDes;