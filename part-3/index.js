const App = () => {
    return (
        <div>
            <Person name="Bugs Bunny" age="42" hobbies={["carrots", "lola bunny", "traveling"]}/>
            <Person name="Daffy Duck" age="41" hobbies={["ponds", "money", "food"]}/>
            <Person name="Elmer Fudd" age="17" hobbies={["hunting", "guns", "rabbits"]}/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));