import { Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./components/Table";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
