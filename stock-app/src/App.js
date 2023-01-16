import "./App.css";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import AnimatedPage from "./UI/AnimatedPage";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/signin">
                <AnimatedPage>
                  <Home></Home>
                </AnimatedPage>
              </RequireAuth>
            }
          ></Route>
          <Route
            exact
            path="/signin"
            element={
              <AnimatedPage>
                <SignIn></SignIn>
              </AnimatedPage>
            }
          ></Route>
          <Route
            exact
            path="/signup"
            element={
              <AnimatedPage>
                <SignUp></SignUp>
              </AnimatedPage>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
