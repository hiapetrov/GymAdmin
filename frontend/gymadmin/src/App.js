import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="http://localhost:5000/api/appointments" method="post" 
              className="form">
                <label>First Name</label><br></br>
                <input type="text"  name="name" id="name"></input><br></br>
                <label>Last Name</label><br></br>
                <input type="text"  name="lastName" id="lastName"></input><br></br>
                <label>Date</label><br></br>
                <input type="date"  name="date" id="date"></input><br></br>
          <button type="submit">Submit to DB</button>
        </form>
        <form action="http://localhost:5000/api/appointments" method="get" className="form">
          <button>View DB</button>
        </form>
      </header>
    </div>
  );
}

export default App;
