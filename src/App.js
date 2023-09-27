import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./Pages/Analytics";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import FileManager from "./Pages/FileManager";
import Order from "./Pages/Order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";
import SlideBar from "./Components/SlideBar";

function App() {
  return (
    <>
      <Router>
        <SlideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/filemanager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/*" element={<>Not Found</>} />
          </Routes>
        </SlideBar>
      </Router>
    </>
  );
}

export default App;
