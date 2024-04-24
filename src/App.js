import { Navbar } from "./Components/Navbar";
import { Contact } from "./Components/Contact";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Addcontact } from "./Components/Addcontact";
import Editcontact from "./Components/editContact";

function App() {

  return (
    //adding contact detail using useDestach
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="py-3">
          <Routes>
            <Route exact path="/" element={<Contact />} />
            <Route exact path="/contacts/add" element={<Addcontact />} />
            <Route exact path="/contacts/edit/:id" element={<Editcontact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
