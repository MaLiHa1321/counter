export default function UserDetails({detail}){
    const {name, email} = detail
    return (
        <>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
        </>
    )
}