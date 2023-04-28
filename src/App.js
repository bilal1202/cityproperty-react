import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import SignLn from "./pages/SignLn";



function App() {
  return (
    <>

<Router>

<Routes>

  <Route path="/" element={<Home/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>
  <Route path="/sign-in" element={<SignLn/>}></Route>
  <Route path="/sign-up" element={<SignUp/>}></Route>
  <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
  <Route path="/offers" element={<Offers/>}></Route>

</Routes>

</Router>

    </>
  );
}

export default App;
 