import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const Form = ({InputText, setInputText, todos, setTodos}) => {
    const inputTextHandler = (e) =>{
        const textValue = e.target.value;
        setInputText(e.target.value);
        
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {text: InputText, completed: false, id:Math.random() * 1000}]);
        setInputText(null)
        
    
    }
    return ( 
        <form>
            <input value={InputText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button type="submit" onClick={submitTodoHandler}><FontAwesomeIcon icon={faPlusSquare} className="colortext plus"></FontAwesomeIcon></button>
            </form>
     );
}
 
export default Form
