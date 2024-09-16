import {BrowserRouter,Route,Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./component/Navbar";
import { Footer } from "./pages/Footer";
import { Error } from "./pages/Error";
import { LogOut } from "./pages/LogOut";
import { AdminLayout } from "./component/Layouts/AdminLayout";
import { AdminContact } from "./pages/AdminContact";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminUpdate } from "./pages/Amdin-Update";
 const App=()=>{
  return <>
  <BrowserRouter >
  <Navbar/>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/logout" element={<LogOut />} />
      <Route path ="*" element={<Error />} />
      {/* admin route */}
      <Route path="/admin" element={<AdminLayout />}>
      <Route path="users" element={<AdminUsers />} />
      <Route path="users/:id/edit" element={<AdminUpdate />}/>
      <Route path="contacts" element={<AdminContact />} />

      </Route>
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>;
}

export default App;

