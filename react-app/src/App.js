import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { EditContactPage } from "./compound-component-pattern/EditContactPage/EditContactPage";
import { CreateContactPage } from "./compound-component-pattern/CreateContactPage/CreateContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div style={{ padding: 20 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/edit-contact/:contactId"
              element={<EditContactPage />}
            />
            <Route path="/create-contact" element={<CreateContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
