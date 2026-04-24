import {
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
//
import { AUTH } from "../firebase";
import Loading from "./Loading";

function Guard({
  children,
}: {
  children: React.ReactNode;
}) {
  // currentUser는 just 값. 상태가 아님
  // firebase에 signout을 요청한다고 해도
  // React는 상태변화를 감지하지 못함
  const [user, setUser] = useState<undefined | null | User>(
    undefined,
  );
  // 따라서 OnAuthStateChanged 이벤트를 통해서 signout상태를 감지!

  useEffect(() => {
    // 마운트 될때 실행
    // firebase 내부에 이벤트 리스너 등록, addEventListener
    const unsubscribe = onAuthStateChanged(AUTH, (user) => {
      // 상태가 변했을 때 리렌더링을 통해 라우팅
      setUser(user);
    });

    // 언마운트 될때 실행
    // firebase 내부에 이벤트 리스너 해제, removeEventListener
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <Loading />;
  }

  if (user === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
export default Guard;
