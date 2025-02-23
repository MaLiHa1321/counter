import { useEffect, useState } from "react"
import UserDetails from "./UserDetails";



export default function User(){
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
 
    return (
        <>
        <h2>user: {user.length}</h2>
        {
            user.map((user,id) => <UserDetails key={id} detail={user}></UserDetails>)
        }

        </>
    )
}