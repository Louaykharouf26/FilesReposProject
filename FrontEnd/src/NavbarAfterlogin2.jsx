import {  redirect } from "react-router-dom";
function NavbarAfterlogin2({ notifications })
{const logout =()=>{
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("subscription_id");
    redirect("/");
   }
    return(<>
      <header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
  <a href="/" className="logo d-flex align-items-center">
    
    <span className="d-none d-lg-block filesrepo"> <i className="bi bi-archive"></i> FilesRepo</span>
  </a>

</div>

<nav className="header-nav ms-auto">
  <ul className="d-flex align-items-center">
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        {notifications && (
          <span className="badge bg-primary badge-number">{notifications.length}</span>
        )}
      </a>
      {notifications && notifications.length > 0 ? (
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
          <li className="dropdown-header">
            You have {notifications.length} new notifications
            <a href="#">
              <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              {notification.icon && <i className={`bi ${notification.icon}`}></i>}
              <div>
                <p>{notification}</p>
              </div>
            </li>
          ))}
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li className="dropdown-footer">
            <a href="#">Show all notifications</a>
          </li>
        </ul>
      ) : (
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
          <li className="dropdown-header">
            You have no new notifications
          </li>
          <li>
            <hr className="dropdown-divider"></hr>
          </li>
          <li className="dropdown-footer">
            <a href="#">Show all notifications</a>
          </li>
        </ul>
      )}
    </li>




    <li className="nav-item dropdown pe-3">

      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
    
        <span className="d-none d-md-block dropdown-toggle ps-2">{localStorage.getItem("email")}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>{localStorage.getItem("subscription_id")}</h6>
          
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

       
       

        <li>
          <a className="dropdown-item d-flex align-items-center" href="/">
          <i className="bi bi-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="/Dashboard">
          <i className="bi bi-speedometer"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#" onClick={logout}>
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
    </li>

  </ul>
</nav>

</header>
    </>)
}
export default NavbarAfterlogin2;