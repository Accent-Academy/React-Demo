import Home from "./components/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Pages/Contact/Contact";
import router from "./routes";
function App() {
  return (
    <div className="App">
      <Routes>
        {router &&
          router.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
      </Routes>
    </div>
  );
}

export default App;
