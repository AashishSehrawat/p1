import { lazy, Suspense } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={ <Home/> } />
          {/* <Route path="/register" element={} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
