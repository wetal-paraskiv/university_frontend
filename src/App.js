import './App.css';
import StudentsList from './components/StudentsList';
import StudentAdd from './components/StudentAdd';
import StudentRemove from './components/StudentRemove';
import StudentById from './components/StudentById';

function App() {
  return (
    <div className="App">
      <StudentAdd />
      <hr></hr>
      <StudentById />
      <hr></hr>
      <StudentRemove />
      <hr></hr>
      <StudentsList />
    </div>
  );
}

export default App;
