
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

const [InputText, setInputText] = useState("")
const [todos, setTodos] = useState([
  
]) 
  return (
    <div className="App">
      <h1>Att göra lista</h1>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} InputText={InputText}/>
      <div className='list'>
      <TodoList setTodos={setTodos} todos={todos} InputText={InputText}/>
      </div>
     
    </div>
  );
}

export default App;
