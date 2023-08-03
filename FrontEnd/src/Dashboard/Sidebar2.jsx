import './Sidebar.css';
import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Sidebar(){
    const [rgs, setRgs] = useState([]);
    const navigate = useNavigate();
    const [storageaccounts,setStorageAccount] = useState([]);
    const [containers,setContainers] = useState([]);
    const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
    const azureAuthToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjkwMTM2Njg1LCJuYmYiOjE2OTAxMzY2ODUsImV4cCI6MTY5MDE0MDg4NCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQUI3Y0duUUNSY3orUFUxN3VKSjUwbmFCR1hUVTIwM1ZHelJ0U2RLR25UaGI1YVluLy9PcVhUYmVFMEV0RDlPSUciLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxMDIuMTU2LjUwLjM3IiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiWFYxTVJzZldFa1dHc2d4aU9TY0dBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.eA1r6uuizHGEw18T8omd2eG9GRok3oVNFIMfdp0XybEnaxL3uFQZBn6R_SXM-8lMBgMFNMmoukbkrU5KjIL1_N2K0jdnEmtZNxx3j_Ni_8pNfW3g1UkicOP2A-JJC1FLLywxtrpUII0CrbH6bjSMPgt89jogeZbj0FkXWjAzxnapFX1HUGnE8SzbWMg5uS96ztwG456SOli1aPSrrwGLHoWilhMubQ6XuOGo6Hj8CA9dOC61JzIyRHp95CvVlOEVfVfEgKThyKYnTCMbH2Kr_21dWXPusyNIwBO88SgWZpbw6lP3B0qAXa3jKFXBT4H-yLOC0yi0AxQ1UXWCL--VYw"

    const handleContainerClick = (containerName) => {
        navigate(`/containers/${containerName}`);
      };
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
      }, [subscriptionId, azureAuthToken]);
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
            console.log(storageaccounts)
          })
          .catch(error => {
            console.error(error);
          });
        })
      },[rgs, subscriptionId, azureAuthToken]);
      useEffect(() => {
        //const subscriptionId = '94bdf75f-0db0-45e0-bb43-ff113d14ea1f';
        const azureAuthToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjkwMTM2Njg1LCJuYmYiOjE2OTAxMzY2ODUsImV4cCI6MTY5MDE0MDg4NCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQUI3Y0duUUNSY3orUFUxN3VKSjUwbmFCR1hUVTIwM1ZHelJ0U2RLR25UaGI1YVluLy9PcVhUYmVFMEV0RDlPSUciLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxMDIuMTU2LjUwLjM3IiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiWFYxTVJzZldFa1dHc2d4aU9TY0dBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.eA1r6uuizHGEw18T8omd2eG9GRok3oVNFIMfdp0XybEnaxL3uFQZBn6R_SXM-8lMBgMFNMmoukbkrU5KjIL1_N2K0jdnEmtZNxx3j_Ni_8pNfW3g1UkicOP2A-JJC1FLLywxtrpUII0CrbH6bjSMPgt89jogeZbj0FkXWjAzxnapFX1HUGnE8SzbWMg5uS96ztwG456SOli1aPSrrwGLHoWilhMubQ6XuOGo6Hj8CA9dOC61JzIyRHp95CvVlOEVfVfEgKThyKYnTCMbH2Kr_21dWXPusyNIwBO88SgWZpbw6lP3B0qAXa3jKFXBT4H-yLOC0yi0AxQ1UXWCL--VYw'; // Your complete token here
        const apiVersion = '2022-09-01';
    
        //const resourceGroupName = 'pfa';
        rgs.forEach(rg =>{
          storageaccounts.forEach(storage=>{
            const apiEndpoint = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${rg.name}/providers/Microsoft.Storage/storageAccounts/${storage.name}/blobServices/default/containers?api-version=${apiVersion}`;
            const requestOptions = {
              method: 'GET',
              headers: {
               'Authorization': `Bearer ${azureAuthToken}`,
             //'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjkwMDE3OTAzLCJuYmYiOjE2OTAwMTc5MDMsImV4cCI6MTY5MDAyMzU2OCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQVgxcVJqQ2dxRHJSbUZTS0RhZUdWY05tcC82dG1UakV2NEpOL0czRy8xVHZUaHEwSUxuTXhtYStWNWtzTW9RK3QiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxOTcuMC40My44OCIsIm5hbWUiOiJsb3VheWtocm91ZiIsIm9pZCI6IjdlYjM2OGNkLTAzYmItNDVmZi1iNGI4LWUyMTU0YWRkYjZmOSIsInB1aWQiOiIxMDAzMjAwMDRGREExNjMyIiwicmgiOiIwLkFSOEFUV2JXMjdsTzYwYVoyRnhEdWhVOFlVWklmM2tBdXRkUHVrUGF3ZmoyTUJNZkFHOC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJWczFsVFAtTXpBZEsybG1NWUxrcWNEYUVfWDdkVERvQmR6bVQzdUlXRUdJIiwidGlkIjoiZGJkNjY2NGQtNGViOS00NmViLTk5ZDgtNWM0M2JhMTUzYzYxIiwidW5pcXVlX25hbWUiOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXBuIjoibG91YXlraHJvdWZAaW5zYXQudS1jYXJ0aGFnZS50biIsInV0aSI6InNZajVzZlBJYWstanVXUnMyajR5QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc190Y2R0IjoxNTA0MDEyNDU2fQ.UQnI37zHg29F7QELafDau8PIUdnH4PaleK8APO9VZJero5oesla2F51PnAu9xbzGB4Bs2XzedEfM4yBJrC8FAWOvjTXbU28fViLtH1os-hyIXJhOP01hTztdGhAdEKjbjcOzbjlSVYkyBd5E_rzMhs0eeWd2JL9LUVEOgK99sTLrKv8JwQLpOWljeiZi_CQA3Apb7I6Kn6fC8bqo2cFdaL23JJO7pOaiuuTuvUCl0G-LszDQHrht06s4JywnRNgBwDmS1oIkZxl9AFCbmOqtf-ErE-wmwbW8Sr6XxfiOolCiJGmiZkvr87cFYGo-SHiLHR2T2nKQbfJ7SIBzT9Ar9Q',
                'Content-Type': 'application/json'
              }
            };
            fetch(apiEndpoint, requestOptions)
            .then(response => response.json())
            .then(data => {
              setContainers(data.value);
             // console.log(storageaccounts)
            })
            .catch(error => {
              console.error(error);
            });
          })
          })
          
      }, [rgs, storageaccounts, subscriptionId, azureAuthToken]);
      console.log(containers)
    return(<>
                <aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <a className="nav-link " href="index.html">
      <i className="bi bi-grid"></i>
      <span>Dashboard</span>
    </a>
  </li>
  <li className="nav-item">
        <a className="nav-link collapsed" href="/FormContainer">
        <i className="bi bi-folder-plus"></i>
          <span>Create a Container</span>
        </a>
      </li>
 

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul>
    {containers.map(storage => (
            <li key={storage.name}> <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
    
  
            <li>
              <a onClick={() => handleContainerClick(storage.name)}>
                <i className="bi bi-circle"></i><span>{storage.name}</span>
              </a>
            </li>
          </ul></li>
          ))}
        </ul>
</li>
</ul>
</aside>
     
    </>)
}
export default Sidebar;