import "./App.css";
import ContentTable from "./components/ContentTable";
import AccountData from "./components/AccountData";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account" element={<ContentTable />} />
          <Route path="/account/:id" element={<AccountData />} />
          <Route path="*" element={<Navigate replace to="/account" />} />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
