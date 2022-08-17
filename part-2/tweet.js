const Tweet = (props) => {
    let d = new Date();
    let day = d.toString();
    
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.name}</p>
            <p>{day}</p>
            <p>{props.message}</p>
        </div>
    );
}