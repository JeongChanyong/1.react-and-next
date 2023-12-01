import { useState, useEffect, useRef } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';
import useUpdate from './hooks/useUpdate';
import useInput from './hooks/useInput';

// 1. 마운트
// 2. 업데이트(리렌더)
// 3. 언마운트

function App() {
  const [count, setCount] = useState(0);

  // const [text, setText] = useState('');
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  // 구조할당의 경우 작명은 상관 없고 순서만 지켜 주면 된다
  const [text, onChangeText] = useInput();

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // 업데이트 실행
  useUpdate(() => {
    console.log('App 컴포넌트 업데이트');
  });

  // 마운트 실행
  useEffect(() => {
    console.log('마운트');
  }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} onChangeText={onChangeText} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
