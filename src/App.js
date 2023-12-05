import './App.css';

function App() {
  const notic = () => {
    Notification.requestPermission().then(perm => {
      if(perm === 'granted') {
        new Notification("Fuck OGG")
      }
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => notic()}>clik</button>
      </header>
    </div>
  );
}

export default App;
