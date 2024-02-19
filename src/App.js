import { Route, Routes, useNavigate } from "react-router";
import Home from "./Pages/Home";
//import { BrowserRouter } from "react-router-dom";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import UserProfile from "./Pages/UserProfile";
import About from "./Pages/About";
import Timer from "./Timer";
import Counter from "./Counter";
import ComponentContext from "./PropDrillingComponent/ComponentContext";
import Component2 from "./PropDrillingComponent/Component2";
import Component3 from "./PropDrillingComponent/Component3";
import Componenet4 from "./Component/Componenet4";
import UseRefUser from "./RefComponet/UseRefUser";
import CustomHook from "./CustomHook/CustomHook";

function App() {
  // const navigate = useNavigate();

  // const navigateToHomePage = () =>{
  //   navigate("/home");
  // }

  return (
    // <>
    // <h1 > Hello Snehal</h1>
    // <button onClick={()=>navigateToHomePage()}>Goto home page</button>
    // </>
    // // <Home />

    /*  *****************************************************************************  */
    <>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/about" element={< About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>

      {/* <Timer /> */}
      {/* <Counter /> */}
      {/* <ComponentContext /> */}
      {/* <Component3 /> //it show undefined because Component3 not in stack */}
      {/* <Componenet4 /> */}
      {/* {<UseRefUser />} */}
      <CustomHook />

    </>

  );
}

export default App;
