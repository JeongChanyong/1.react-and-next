import { useRef, useEffect } from 'react';

export default function useUpdate(cb) {
  // Custom Hook을 이용 하려면 함수명에 use를 명시 해줘야 한다.

  // 업데이트(리렌더) 실행
  const isMountRef = useRef(false);
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log('업데이트');

    cb(); //콜백함수
  });
}
