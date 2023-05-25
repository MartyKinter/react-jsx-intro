
function App(){
    return (
        <div>
            <Tweet name="John Doe"
            username="JohnDoe"
            date={new Date().toDateString()}
            message="My first tweet"
            />
            <Tweet name="Jane Doe"
            username="JaneDoe"
            date={new Date().toDateString()}
            message="My second tweet"
            />           
            <Tweet name="Jimmy Doe"
            username="JimmyDoe"
            date={new Date().toDateString()}
            message="My third tweet"
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);