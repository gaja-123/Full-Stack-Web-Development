import './App.css';
import TodoRowItem from './components/TodoRowItem';
function App() {
  return (
    <div className="container">
  <div className="card">
    <h2>Your To-Dos</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Assigned</th>
        </tr>
      </thead>
      <tbody>
        <TodoRowItem/>
        <tr>
          <td>2</td>
          <td>complete typescript tmr</td>
          <td>Rajan</td>
        </tr>
        <TodoRowItem/>
      </tbody>
    </table>
  </div>
</div>

  );
}

export default App;
