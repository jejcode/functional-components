import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName={'Joel'}
      lastName={'Jacob-Jingle-Heimer'}
      age={'99'}
      hairColor={'bald'}/>
      <PersonCard 
      firstName={'Sarah'}
      lastName={'Orchid'}
      age={'40'}
      hairColor={'blonde'}/>
      <PersonCard 
      firstName={'Haiku'}
      lastName={'The Wonder Dog'}
      age={'86'}
      hairColor={'black'}/>
    </div>
  );
}

export default App;
