function App(){
    return (
        <div>
        <Person
          name="John"
          age={40}
          hobbies={["reading", "long walks on the beach", "sleeping"]}
        />
        <Person name="Jane" 
        age={35} 
        hobbies={["cooking", "painting"]} 
        />
        <Person
          name="Jimmy"
          age={15}
          hobbies={["video games", "arguing with his parents"]}
        />
      </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);