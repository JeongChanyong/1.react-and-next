import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useRef } from 'react';

// mock 데이터
const mockData = [
  {
    id: 0,
    isDone: true,
    content: 'React 공부하기',
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'Next.js 공부하기',
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: '소명자료 준비하기',
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  // todos의 ID 값 useRef를 이용해 3번 부터 지정하고 newTodo로 객체를 생성 하면 3번 부터 하나씩 증가되고 증감 연산자를 통해 고유한 ID값을 가질수 있다.
  const idRef = useRef(3);

  const onCreate = (content) => {
    // App() 컴포넌트에 작성한 이유는 TodoEditor와 TodoList에서 동일한 상태(Todo)를 관리 하기에 두 컴포넌트의 공통 부모 컴포넌트에서 작성을 해야 한다.
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content, // content: content,
      createDate: new Date().getTime(),
    };
    // ...todos 전개 연산자 -> 기존 todos에 담겨 있던 값을 불러오고 newTodo를 통해 원본 데이터에 추가를 한다.
    // 기존의 값 보다 앞에 저장을 하고 싶으면 배열의 위치만 바꾸면 된다.
    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === targetId) {
    //       // 체크 박스의 id값과 순회한 id 값이 같으면 처리
    //       return {
    //         ...todo, // 기존값의 그대로 남겨두고
    //         isDone: !todo.isDone,
    //       };
    //     } else {
    //       return todo;
    //     }
    //   })
    // );
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
    console.log(todos);
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
