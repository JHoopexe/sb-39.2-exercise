const App = () => {
    return (
        <div>
            <Tweet username="JohnDoe" name="John" message="John Wick is cool"/>
            <Tweet username="BugsBunny" name="Bugs" message="Whats up doc?"/>
            <Tweet username="DaffyDuck" name="Daffy" message="I hate rabbits..."/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));