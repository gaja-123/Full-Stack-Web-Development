import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import TodoForm from './components/TodoForm';

function App() {

const [todos,setTodos] = useState([
  { rowNumber: 1, rowDescription: "React", rowAssigned: "Gaja1" },
  { rowNumber: 2, rowDescription: "TypeScript", rowAssigned: "Gaja2" },
  { rowNumber: 3, rowDescription: "Bootstarp", rowAssigned: "Gaja3"},
  { rowNumber: 4, rowDescription: "Integrate front and back", rowAssigned: "Gaja4"}
]);

const [showAddTodoForm,setshowAddTodoForm]=useState(false);
// button click function handler with functionality
const addTodo=(description : string,assigned : string)=>{
  let rownum=0
if (todos.length > 0) {
  rownum = (todos[todos.length - 1]?.rowNumber ?? 0) + 1;
} else {
  rownum = 1;
}

  const todo={rowNumber: rownum, rowDescription: description, rowAssigned: assigned}
  setTodos([...todos,todo])
    //console.log(todos)
}

const deleteTodo=(deleteRowNumber : number) =>{
  let filtered = todos.filter((value) => value.rowNumber!==deleteRowNumber);
  setTodos(filtered);
}
  return (
    <div className="container">
  <div className="card">
    <h2>Your To-Dos</h2>
    <TodoTable todos={todos} deleteTodo={deleteTodo}/>
    <button className='btn btn-primary' onClick={()=>setshowAddTodoForm(!showAddTodoForm)}>{showAddTodoForm?"close add new todo form":"open add new todo form"}</button>
    { showAddTodoForm && <TodoForm addTodo={addTodo} />}
  </div>

</div>

  );
}

export default App;
