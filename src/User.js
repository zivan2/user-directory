function User(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
        </div>
    )
}

export default User