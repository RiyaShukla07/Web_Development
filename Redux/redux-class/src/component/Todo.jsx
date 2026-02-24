import { useSelector } from "react-redux";
import AddForm from "./AddFORM.JSX";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch;

    const clickHandler = () => {
       console.log("delete", id);
       dispatch(deleteTodo(id));
    };
    return(
       <>
       <AddForm/>
       <h2>Todo List App</h2>
       <ul>
        {todos.map((todo) => {
            <li key={todo.id}>{todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete
                </button></li>
           
        } )}
       </ul>
       </>
    );
}