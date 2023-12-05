import './App.css';

function App() {


  const button = document.querySelector('button')

  button.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
      if(perm === 'granted') {
        new Notification("Fuck OGG")
      }
    })
  })
  
  return (
    <div className="App">
      <header className="App-header">
      <button>clik</button>
      </header>
    </div>
  );
}

export default App;
