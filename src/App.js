import './App.css';
import AddBudget from './Components/AddBudget';
import AddDepense from './Components/AddDepense';
import ListeDepenses from './Components/ListeDepenses';
import Stats from './Components/Stats';

function App() {
  return (
    <div className="App">
   <AddDepense/>
   <AddBudget/>
   <ListeDepenses/>
   <Stats/>
    </div>
  );
}

export default App;
