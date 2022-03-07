import inputForm from "./Form";
import Todo from "./Todo";


const TodoList = ({todos, setTodos, InputText}) => {

    return ( 
        
           <div>
               <ul className="todo-list">
                   {todos.map(todo => (
                       <Todo 
                       setTodos={setTodos} 
                       todos={todos} 
                       text={todo.text} 
                       todo={todo}
                       key={todo.id} />
                   ))}
                   </ul>

           </div>
            
        
     );
}
 
export default TodoList;