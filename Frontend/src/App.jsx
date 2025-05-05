import { lazy, Suspense } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const SignUp = lazy(() => import("./pages/SignUp.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
