function Navbar(){
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
 
                <li><a className="nav-link scrollto " href="/Login">Login </a></li>
                <li><a className="getstarted scrollto" href="/SignUp">SignUp</a></li>


           </ul>
           <i className="bi bi-list mobile-nav-toggle"></i>
         </nav>
         </div>
  </header>
    </>
 )
}
export default Navbar;