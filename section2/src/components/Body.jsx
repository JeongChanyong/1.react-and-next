import { useRef, useState } from 'react';
import './Body.css';

const Body = () => {
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [bio, setBio] = useState('');

  const [state, setState] = useState({
    name: '',
    gender: '',
    bio: '',
  });

  // const onChangeName = (e) => {
  //   setState({
  //     ...state,
  //     name: e.target.value,
  //   });
  // };

  // const onChangeGender = (e) => {
  //   setState({
  //     ...state,
  //     gender: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   setState({
  //     ...state,
  //     bio: e.target.value,
  //   });
  // };
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const nameRef = useRef();

  const onSubmit = () => {
    if (state.name === '') {
      nameRef.current.focus();
      return;
    }
    console.log(state);
    alert(`${state.name}님 회원 가입을 축하합니다!`);
  };

  // 테스트
  return (
    <div className="body">
      <div>
        <input
          name={'name'}
          value={state.name}
          onChange={onChange}
          ref={nameRef}
        />
      </div>
      <div>
        <select name={'gender'} value={state.select} onChange={onChange}>
          <option value="">밝히지 않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <div>
        <textarea name={'bio'} value={state.bio} onChange={onChange} />
      </div>
      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
};
export default Body;
