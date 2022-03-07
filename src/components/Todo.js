import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faCoffee, faTrash} from '@fortawesome/free-solid-svg-icons'

const Todo = ({text, todos, todo, setTodos}) => {

const deleteTodo = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
}
const doneCheck = () => {
    setTodos(todos.map(item =>{
        if(item.id === todo.id){
            return{
            ...item, completed: !item.completed
        }
    }
    return item;
    })
    );
}


    return ( 
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
               {text} </li>
                <button className="check">
                <FontAwesomeIcon icon={faCheck} onClick={doneCheck} className="colortext"></FontAwesomeIcon>
                </button>
                <button className="trash" onClick={deleteTodo}>
                <FontAwesomeIcon icon={faTrash} className="colortext"></FontAwesomeIcon>
                </button>
                
                </div>
     );
}
 
export default Todo;