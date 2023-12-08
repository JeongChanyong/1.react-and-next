import { useState, useRef } from 'react';
import './TodoEditor.css';

// eslint-disable-next-line react/prop-types
export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState('');
  
  // input창을 참조하는 변수
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    // 클릭 했을때 content가 비어 있으면 인풋창에 포커스를 주고 리턴
    if (content === '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(''); // content를 등록 하고 인풋창에 남아 있는 기존 내용 지우기
  };

  // 엔터로 추가 하기
  // KeyCode : 13 = Enter
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className="TodoEditor">
      <input
        ref={inputRef}
        placeholder="새로운 Todo ..."
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
