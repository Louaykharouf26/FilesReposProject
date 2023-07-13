
import NavbarAfterlogin2 from "../NavbarAfterlogin2";
import './Dashboard.css'
import Dashboardpng from '../assets/img/dashboard.png'
import Sidebar from "./Sidebar";
function Dashboard()
{
 return(
    <>
     <NavbarAfterlogin2></NavbarAfterlogin2>
     <Sidebar></Sidebar>
     <h5 className="typewriter">Welcome!  <span>Here you can create and manage your repositories !</span></h5>
     <img src={Dashboardpng} className="dashboardpng"></img>
     <div className="pageVM">
        <a href='/'>   <button type="button" className="btn btn-outline-secondary">Home Page</button></a>
        <a href='/Form'>   <button type="button" className="btn btn-outline-secondary">Create Repository</button></a>
        </div>
    </>
 )
}
export default Dashboard;