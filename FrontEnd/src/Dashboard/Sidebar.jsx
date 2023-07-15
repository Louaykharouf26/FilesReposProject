import './Sidebar.css';
import {useState , useEffect} from 'react';
function Sidebar(){
    const [rgs, setRgs] = useState([]);
    const [storageaccounts,setStorageAccount] = useState([]);
    const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
    const azureAuthToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjg5NDE2NjU5LCJuYmYiOjE2ODk0MTY2NTksImV4cCI6MTY4OTQyMDg4OSwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQVNBdTVFZzFwTkliTE1LWTJva3FLVWxhcWZ0Qk4rSWZyRjE4S2ZpVkIvOVNRUlZxQzFjZEtDSGZEUG1nQk1tVHUiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxMDIuMTU4LjU3Ljk4IiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiQVIyQnNNdm5WRXlUMElHcVkzQkJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.QFD61vqa8yTGWVIVqYmRDLUpdoJwgCOPF5Xv6fUFnYbIN4uddMPHqWJ1mWPHFtXP_aK3sTNbNjc_TYCXMX25Z-baIMrQ0xD_6AZAXqkAJmQkQniUYVTzoW1yPek-QLV3UPY8FwM_QI1DT43nwg4MRxbogG6bqq2onOJHWSmUegV2cWLv50d4kM6bJpmgb-Y77FmV2vPDGTpYbd9SQVwJvgIwVR6xVxbqgax2HBkBRBOY3bOxHIf5xnuepwWRi3kAzzZ_5_S4D1VcxB8KJ4AI_nYI9IGa6s1qn80TtRLlWE3Fd-JbUGcafIldKvdmsolPJ4GSCQZSxQxOcw5PsGd12A"
    const extractVmName = (resourceGroupName) => {
        return resourceGroupName.substring(0, resourceGroupName.lastIndexOf("-resource-group"));
      };
   // Fetch the resource groups names 
   useEffect(() => {
    //const subscriptionId=localStorage.getItem("subscription_id");
    //const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f"
    //const resourceGroupName = 'pfa';
    const apiVersion = '2021-04-01';
    const apiEndpoint = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups?api-version=${apiVersion}`;
          const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${azureAuthToken}`,
        'Content-Type': 'application/json'
      }
    };

    fetch(apiEndpoint, requestOptions)
      .then(response => response.json())
      .then(data => {
        setRgs(data.value|| []);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  // Fetch the storage accounts of the resource group 
  useEffect(() => {
    //const subscriptionId = '94bdf75f-0db0-45e0-bb43-ff113d14ea1f';
   // const azureAuthToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjg1MzgzODM3LCJuYmYiOjE2ODUzODM4MzcsImV4cCI6MTY4NTM4ODU3MywiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQWpYZjg0YTRRT2hITmU5eFRBNHlsZ1pUR1p1WGNPY3daUTRDUDFwWTh1TEE2RERlMlU0WmhuYnlPaUN1Q21vZTQiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxOTcuMTYuMTY0LjExIiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiUy1kY21KUXp1VU9sdGFKSkprRkhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.FQBSUgd-1FZwA221EriZUjX2I0zFSJodead0LB6vDxlx9lyJU0ClV1ez8yBzW17ReUNl2derCwK486o1E7p-O7LctrxcvU8--fbOq0eI1khEFtXOhJuHuorVqdrEjZrI37S2LizcPRGD-hroytpkb5RBXtPnW3m8kVSnicpK1e-9WbuC8HHbsB4bs1YQv4Vk680ncSrVmpTsA3k8LOcr_F487vRyafrTyQ1cIXAkWa5T7YsipHE40IQ5XHIKA2W-Vfc7noFNBuEYOFG179ATuCZn0FWKzzD1leiImqQFOybalzkgmYRkPH7nW9xmLxN9wIY1c_ZWFCu-hTJEKm3tjw';
    const apiVersion = '2022-09-01';

    //const resourceGroupName = 'pfa';
    rgs.forEach(rg =>{
      const apiEndpoint = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${rg.name}/providers/Microsoft.Storage/storageAccounts?api-version=${apiVersion}`;
      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${azureAuthToken}`,
          'Content-Type': 'application/json'
        }
      };
      fetch(apiEndpoint, requestOptions)
      .then(response => response.json())
      .then(data => {
        setStorageAccount(data.value);
       // console.log(storageaccounts)
      })
      .catch(error => {
        console.error(error);
      });
    })
  }, []);
  console.log(storageaccounts)
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
        <a className="nav-link collapsed" href="users-profile.html">
        <i className="bi bi-folder-plus"></i>
          <span>Create a Container</span>
        </a>
      </li>
 

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul>
          {storageaccounts.map(storage => (
            <li key={storage.name}> <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
    
  
            <li>
              <a href="icons-bootstrap.html">
                <i className="bi bi-circle"></i><span>{storage.name}</span>
              </a>
            </li>
          </ul></li>
          ))}
        </ul>
</li>
</ul>
</aside>
     
        </>
    )
}
export default Sidebar;