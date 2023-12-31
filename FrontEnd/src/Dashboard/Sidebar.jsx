import './Sidebar.css';
import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Sidebar(){
    const [rgs, setRgs] = useState([]);
    const navigate = useNavigate();
    const [storageaccounts,setStorageAccount] = useState([]);
    const [containers,setContainers] = useState([]);
    const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
    const azureAuthToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjkwODg3NzI1LCJuYmYiOjE2OTA4ODc3MjUsImV4cCI6MTY5MDg5MTc2NSwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQU1sMUpvcWR5bGRiVGNkd1AxQkcxb2pFYmJENjFYWm5keExNVDF1YlUvU0VkMzBlVlpVZm5wbExPZ3NLcXFIL3QiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiI0MS42Mi4yNDcuMTYzIiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiU0EteEl6QzdqMHllZkw0SW00SWtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.WTU9ZhdltA6fs5yNJOP9avCx717JR5MD1pAP_7mmuz5wzeMi5tdmPw84x1zqkw0qNLiY_MD1tX4dUuLklVJws4fup8_b6aJxpJkr2Br_mXL6aFTW_blxynyOMq-jp_3gf9XY6H2a1TG4RD2jv8ZPxVapjDgYjoENE5MY34hZA6CjoHRcQLAZ6BUcFqEynQ27n-uYbFk62V_djD9dFmPyee3HwbkItCDMrG_OTt9yK2VZTHQXz8lm2Pa1Lll4ZigBdPQXZFjOS27SNNK3lcnnR5-ejW4tuDvoN6NymHFnj2LJY_SO7jXS3XtmHhaPW8SqHIOhwymLnEIXnKnbJv3uUg"

    const handleContainerClick = (containerName) => {
        navigate(`/containers/${containerName}`);
      };
      //Extract Rgs 
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
        //const azureAuthToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjkwMTA0OTk4LCJuYmYiOjE2OTAxMDQ5OTgsImV4cCI6MTY5MDEwOTY1MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQVZjWDVVOHZqZ092cnViSjZaMHk5K05QalF3bGtLZzFCdlU4WVJLbFBkSGlLTk93NVdpLzI4TTc4cXBqUnA4TDQiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxMDIuMTU2LjUwLjM3IiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiSTFyNWsyejd6VTJVVnc2ZmRuY01BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.pFNI3X5H7Bk6KDIXtN8KHOcCZSQPMVuetijPoyGRXt9OwYla6w-XpeCG6miqsa8mI0EwFpe2saVBJbvWRumpnk7BnqNRxMcZz2OiIaYquQALUIKzDxG4zo0IFcIK81ABu5mhZ0m2FGsmZN0gCByEUej4QIBKrydT_2N49ZbGEhY2SGWvxZbzSmkZ4Hn6uMgvse9JoNB1_kqx-EA6jumTCNo4nQJK6-9t1MR7Vnzk0v_2M1ztRK9hsBbaiGp4apGtTiFofP2gBDRiVUojVpGO62pm4OxC-UwUeaZEURrZBe0xeEx4lkTAWSCbzpzYp7PRe_x39Ub0p2QoQ_IBk3l9pw'; // Your complete token here
        const apiVersion = '2022-09-01';
    
        //const resourceGroupName = 'pfa';
        rgs.forEach(rg =>{
          storageaccounts.forEach(storage=>{
            const apiEndpoint = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${rg.name}/providers/Microsoft.Storage/storageAccounts/${storage.name}/blobServices/default/containers?api-version=${apiVersion}`;
            const requestOptions = {
              method: 'GET',
              headers: {
               //'Authorization': `Bearer ${azureAuthToken}`,
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjkwODg3NzI1LCJuYmYiOjE2OTA4ODc3MjUsImV4cCI6MTY5MDg5MTc2NSwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQU1sMUpvcWR5bGRiVGNkd1AxQkcxb2pFYmJENjFYWm5keExNVDF1YlUvU0VkMzBlVlpVZm5wbExPZ3NLcXFIL3QiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiI0MS42Mi4yNDcuMTYzIiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiU0EteEl6QzdqMHllZkw0SW00SWtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.WTU9ZhdltA6fs5yNJOP9avCx717JR5MD1pAP_7mmuz5wzeMi5tdmPw84x1zqkw0qNLiY_MD1tX4dUuLklVJws4fup8_b6aJxpJkr2Br_mXL6aFTW_blxynyOMq-jp_3gf9XY6H2a1TG4RD2jv8ZPxVapjDgYjoENE5MY34hZA6CjoHRcQLAZ6BUcFqEynQ27n-uYbFk62V_djD9dFmPyee3HwbkItCDMrG_OTt9yK2VZTHQXz8lm2Pa1Lll4ZigBdPQXZFjOS27SNNK3lcnnR5-ejW4tuDvoN6NymHFnj2LJY_SO7jXS3XtmHhaPW8SqHIOhwymLnEIXnKnbJv3uUg',
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