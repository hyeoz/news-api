// 프로젝트 전체적으로 사용될 수 있는 유틸함수들은 lib 안에서 관리.
import { useEffect, useState } from "react";

export default function usePromise(promiseCreator, deps) {
  // promiseCreator = 콜백함수로 받을 예정, deps = 의존배열
  // 대기중/완료/실패 에 대한 상태관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // 에러 안보이게 해주려면 주석 작성 필요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
