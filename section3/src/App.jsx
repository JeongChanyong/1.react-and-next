import { useState, useEffect, useRef } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';

// 1. 마운트
// 2. 업데이트(리렌더)
// 3. 언마운트

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const onChangeTextArea = (e) => {
    setText(e.target.value);
  };

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // 업데이트(리렌더) 실행
  const isMountRef = useRef(false);
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log('업데이트');
  });

  // 마운트 실행
  useEffect(() => {
    console.log('마운트');
  }, []);

  // 언마운트 실행

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeTextArea} />
      </section>
      <section>
        <Viewer count={count} onChangeTextArea={onChangeTextArea} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
