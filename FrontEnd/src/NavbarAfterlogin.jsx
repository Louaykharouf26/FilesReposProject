import {  useLocation ,useNavigate ,redirect } from "react-router-dom";
function NavbarAfterlogin(){
    const logout =()=>{
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("subscription_id");
        redirect("/");
       }
    return (
       <>
           <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><a href="index.html">FilesRepo</a></h1>
        
       <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></img></a>
      </div>
       <nav id="navbar" className="navbar">
           <ul>
             <li><a className="nav-link  active" href="#hero">Home</a></li>
             <li className=" dropdown"><a href="#"><span>{localStorage.getItem("email")}</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/Dashboard">Dashboard</a></li>
                  <li><a onClick={logout} href="/">Logout</a></li>

                </ul>
              </li>
           </ul>
           <i className="bi bi-list mobile-nav-toggle"></i>
         </nav>
         </div>
  </header>
       </>
    )
   }
   export default NavbarAfterlogin;