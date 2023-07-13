import './Sidebar.css';
function Sidebar(){
    return(
        <>
             <aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <a className="nav-link " href="index.html">
      <i className="bi bi-grid"></i>
      <span>Dashboard</span>
    </a>
  </li>

 

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="icons-bootstrap.html">
          <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
        </a>
      </li>
      <li>
        <a href="icons-remix.html">
          <i className="bi bi-circle"></i><span>Remix Icons</span>
        </a>
      </li>
      <li>
        <a href="icons-boxicons.html">
          <i className="bi bi-circle"></i><span>Boxicons</span>
        </a>
      </li>
    </ul>
  </li>

  </ul>

</aside>
     
        </>
    )
}
export default Sidebar;