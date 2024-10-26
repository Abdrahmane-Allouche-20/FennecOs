import "./App.css";
import Fennec from "./components/Fennec";
import { Suspense } from "react";
import Loading from "./components/Loading";
function App() {
  return (
  <Suspense fallback={<Loading/>}>
    <Fennec />
  </Suspense>
  
);
}

export default App;
