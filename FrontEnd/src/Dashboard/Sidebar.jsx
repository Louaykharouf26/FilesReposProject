import './Sidebar.css';
import {useState , useEffect} from 'react';
function Sidebar(){
    const [rgs, setRgs] = useState([]);
    const azureAuthToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjg5MzMxOTIxLCJuYmYiOjE2ODkzMzE5MjEsImV4cCI6MTY4OTMzNjAyMSwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQVozbWQvRnhLb2R6UG9VUnhZNGZXbmZUcGRoaWhKSUIzamZPVzBwWDYwOGZpWkdDMklsakxZLzdLc0tMc29LWTgiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxMDIuMTU5LjIzMy4yNDkiLCJuYW1lIjoibG91YXlraHJvdWYiLCJvaWQiOiI3ZWIzNjhjZC0wM2JiLTQ1ZmYtYjRiOC1lMjE1NGFkZGI2ZjkiLCJwdWlkIjoiMTAwMzIwMDA0RkRBMTYzMiIsInJoIjoiMC5BUjhBVFdiVzI3bE82MGFaMkZ4RHVoVThZVVpJZjNrQXV0ZFB1a1Bhd2ZqMk1CTWZBRzguIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiVnMxbFRQLU16QWRLMmxtTVlMa3FjRGFFX1g3ZFREb0Jkem1UM3VJV0VHSSIsInRpZCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsInVuaXF1ZV9uYW1lIjoibG91YXlraHJvdWZAaW5zYXQudS1jYXJ0aGFnZS50biIsInVwbiI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1dGkiOiJSM1djS20tTnRVMjI1Nk1XQTc0dUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfdGNkdCI6MTUwNDAxMjQ1Nn0.BEMnEP1kNrSJ4CwIvzveBte-snFKVwwmUsOhkeEXGxBCwiEvw1JruaYqDPDx-1vvP9a7lVSI-Jm-8SzRyks_xCgVO65ck_RZ-0QjGvErcWHOKS0VNd4z_0KQFBkmNE5Z5kSFHUaxmNwP1k2rE_3LgPkzaxYUgyJlkX04jRt7lw0NgR92vOPLjrhP_ghVC_nRocOi8XUejFI4nyu5hPSIyRyYAHIXZOFzD1N0UqFe9CO2W1c5cDNV51spD7RjFmB9dFhG5dlWRl6peeFgECay3q57RvnpkRPKdfcTWIsbnLYhBe0wGEUcmvamfm8xt-6-7Z6MERrUppI91O_9Last6Q"
    const extractVmName = (resourceGroupName) => {
        return resourceGroupName.substring(0, resourceGroupName.lastIndexOf("-resource-group"));
      };
    useEffect(() => {
     // const subscriptionId=localStorage.getItem("subscription_id");
     const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
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

    //Extract storage account name 
    





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
    {rgs.map(rg => (<>
        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
    
  
        <li>
          <a href="icons-bootstrap.html">
            <i className="bi bi-circle"></i><span>{extractVmName(rg.name)}</span>
          </a>
        </li>
      </ul>
      </>
        ))} 
    
  </li>

  </ul>

</aside>
     
        </>
    )
}
export default Sidebar;