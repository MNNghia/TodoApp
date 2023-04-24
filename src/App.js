import './App.scss'
import { NavLink, Route, Link, Routes } from "react-router-dom";
import Active from "./components/Active";
import All from "./components/All.js";
import Completed from "./components/Completed.js";
import Header from './components/Header.js';

function App() {
  
  return (
    <>
      <div className="background">
        <div className="wrapper">
          
            <Header/>

            <div className="wrapper-navbar">
              <div className="menu">
                
                  <NavLink  className="Link" to="/">All</NavLink>
                  <NavLink  className="Link" to="/active">Active</NavLink>
                  <NavLink  className="Link" to="/completed">Completed</NavLink>
                
              </div>

              <ul className="items">

                <Routes>
                  <Route path="/" element={<All/>}/>
                  <Route path="/active" element={<Active/>}/>
                  <Route path="/completed" element={<Completed/>}/>
                </Routes>
                  
                  
              </ul>
            </div>
          
        </div>
      </div>

      {/* <div className="header">
        <NavLink to="/" activeClassName="active">All</NavLink>
        <NavLink to="/Active" activeClassName="active">Active</NavLink>
        <NavLink to="/Completed" activeClassName="active">Completed</NavLink>
      </div>

      <div className="content">
        <Routes>

        <Route path="/" element={<All/>}/>
        <Route path="/Active" element={<Active/>}/>
        <Route path="/Completed" element={<Completed/>}/>
        </Routes>
      </div> */}
    </>

  );
}

export default App;
