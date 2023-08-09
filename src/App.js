import logo from './logo.svg';
import './App.css';

function App() {

  function handleSubmit() {
    console.log('')
  }

  return (
    <div className="App">
      <form>
        <input type="text" name="username" />
        <br />
        <input type="password" name="password" />
        <br />
        <button type='submit' onClick={handleSubmit}>Entrar</button>
      </form>
    </div>
  );
}

export default App;
