import logo from './logo.svg';
import './App.css';
import './components/card';


function App() {
  return (
    <div className="App">
      <h1 className='title'>Pokedex</h1>
      <div className='card'>
        <div className='card-img'>
        <img className='photo-card'></img>
        </div>
        <div className='card-content'>
        <p className='descripcion-card'></p>
        </div>
      </div>
    </div>
  );
}

export default App;