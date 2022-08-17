const Person = (props) => {
    if(props.age > 17){
        return (
            <div>
                <p>Learn some information about this person</p>
                <p>{props.name}</p>
                <p>{props.age}</p>
                <ul>
                    {props.hobbies.map(hobbies => <li>{hobbies}</li>)}
                </ul>
                <h3>Please go vote!</h3>
            </div>
        );
    }
    else{
        return (
            <div>
                <p>Learn some information about this person</p>
                <p>{props.name}</p>
                <p>{props.age}</p>
                <ul>
                    {props.hobbies.map(hobbies => <li>{hobbies}</li>)}
                </ul>
                <h3>You must be 18!</h3>
            </div>
        );
    }
}