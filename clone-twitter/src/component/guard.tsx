import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AUTH } from "../firebase";

function Guard({
  children,
}: {
  children: React.ReactNode;
}) {
  // currentUser는 just 값. 상태가 아님
  // firebase에 signout을 요청한다고 해도
  // React는 상태변화를 감지하지 못함
  const [user, setUser] = useState(AUTH.currentUser);

  // 따라서 OnAuthStateChanged 이벤트를 통해서 signout상태를 감지!
  // 상태가 변했을 때 리렌더링을 통해 라우팅
  function unmounted() {
    onAuthStateChanged(AUTH, (user) => {
      setUser(user);
    });
  }

  useEffect(() => {
    // 마운트 해제될 때 콜백 실행
    return unmounted();
  }, []);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
export default Guard;
