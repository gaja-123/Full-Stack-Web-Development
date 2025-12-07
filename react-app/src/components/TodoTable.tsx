import TodoRowItem from './TodoRowItem'
import todoModel from '../models/todoModel'

function TodoTable(props : {todos:todoModel[],deleteTodo:Function}){

    return (

    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
            <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo={props.deleteTodo}
        />
        ))}

      </tbody>
    </table>
    )
}

export default TodoTable;