 import React from "react";
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { UserContext } from "./contexts/UserContext";

 function App() {
  const [userData, setUserData] = React.useState({});
  const uvalue = {userData, setUserData};

      return(
        <div className="App">
          <UserContext.Provider value={uvalue}>
            <BrowserRouter>
              <Routes>
                <Route index element={<SignIn />} />
                <Route path='/home' element={<Home />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </div>
      )
 }

 export default App;
