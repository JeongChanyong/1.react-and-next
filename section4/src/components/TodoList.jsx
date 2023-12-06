import './TodoList.css';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';

// App으로 부터 받은 todos 구조분해 할당
export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase()) // toLowerCase()를 통해 content의 내용을 소문자로 변환, 검색의 경우도 소문자로 변환해서 대, 소문자 구분 없이 검색 가능
    );
  };

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input
        placeholder="검색어를 입력 하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          /> // map 함수를 통해 반복문 -> 전개연산자를 통해 TodoItem에 props 전달
        ))}
      </div>
    </div>
  );
}
