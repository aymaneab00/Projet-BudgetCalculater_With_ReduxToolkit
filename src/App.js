import './App.css';
import AddBudget from './Components/AddBudget';
import AddDepense from './Components/AddDepense';
import Header from './Components/Header';
import ListeDepenses from './Components/ListeDepenses';
import Stats from './Components/Stats';

function App() {
  return (
    <div className="container">
      <Header/>
   <AddDepense/>
   <AddBudget/>
   <ListeDepenses/>
   <Stats/>
    </div>
  );
}

export default App;
