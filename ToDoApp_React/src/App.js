import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoPage from './Pages/ToDoPage';
function App() {
  return (
    <div className="App d-flex align-items-center" style = {{height:"100vh"}}>
      <div className='container-sm  toDoContainer '>
        <h1 className='text-white'>To-Do App</h1>
          <ToDoPage/>
        </div>
      </div>
  );
}

export default App;
