import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  const onAdd = () => {console.log ('hice click en onAdd')};
  const stock = 6;
  const initial = 3;
  return (
    <div className="App">
        <NavBar />
        
      <header className="App-header">
      <div>
        <ItemListContainer onAdd={onAdd} stock={stock} initial= {initial}  />
      </div>
      
      </header>
    </div>
  );
}

export default App;
