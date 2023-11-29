import { useState } from 'react';
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

  // local 저장소 변경 이거 반영 됨?
  // 안되는건가?
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 테스트
  return (
    <div className="body">
      <div>
        <input name={'name'} value={state.name} onChange={onChange} />
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
    </div>
  );
};
export default Body;
