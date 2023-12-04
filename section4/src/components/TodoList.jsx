import './TodoList.css';
import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos }) {
  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input placeholder="검색어를 입력 하세요" />
      <div className="todos_wrapper">
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </div>
    </div>
  );
}
