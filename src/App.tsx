import { useEffect, useState, useContext } from "react";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Router from "components/Router";
import Loader from "components/Loader";
import ThemeContext from "context/ThemeContext";

function App() {
  const auth = getAuth(app);
  const context = useContext(ThemeContext);

  // auth 체크 전 loader를 띄워주기
  const [init, setInit] = useState<boolean>(false);
  // auth의 유저가 있으면 authenticated 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <div
      className={`container ${
        context.theme === "light" ? "light-mode" : "dark-mode"
      }`}
    >
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </div>
  );
}

export default App;
