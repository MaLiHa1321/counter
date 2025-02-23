export default function UserDetails({detail}){
    const {name, email} = detail
    return (
        <div style={{border:'2px solid green'}}>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        </div>
    )
}