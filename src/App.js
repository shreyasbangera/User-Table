import { Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./pages/Table";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
