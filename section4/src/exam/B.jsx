import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'DECREASE') {
    return state - action.data;
  } else if (action.type === 'INCREASE') {
    return state + action.data;
  }
}

export default function B() {
  const [count, dispatch] = useReducer(reducer, 0); // 새로운 state 생성, 2번째 인수가 초기값
  // 1번째 인수는 state의 현재값
  // 2번째 인수는 함수가 저장(트리거 역할을 하는 함수=상태변화) 상태 변화를 촉발 시키는 함수
  // 버튼에서 익명함수로 dispatch()함수를 호면 reducer()를 실행 하게 된다.
  // dispatch 함수를 실행 하면서 정보를 객체 형식으로 넘겨 줘야 하는데 type과 변경할 값을 넘겨줘야 한다.
  // dispatch 함수는 값과 action이라는 객체를 넘겨 준다.
  // 버튼을 클릭 하면 dispatch() 함수가 상태 변화를 촉발 하고 useReducer()에서 첫번째 인수로 받은 함수가 실행(?)

  return (
    <div>
      <h4>{count}</h4>
      <div>
        <button
          onClick={() =>
            // action 객체를 넘겨 준다.
            dispatch({
              type: 'DECREASE',
              data: 1,
            })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'INCREASE',
              data: 1,
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
