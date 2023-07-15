
import {useState , useEffect} from 'react';
function Sidebar(){
    const [rgs, setRgs] = useState([]);
    const [containers, setContainers] = useState([]);
    const [storageAccounts, setStorageAccounts] = useState([]);
    const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
    const azureAuthToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjg5MzUyNzkzLCJuYmYiOjE2ODkzNTI3OTMsImV4cCI6MTY4OTM1NzAyNSwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQUl3ZmFhekxMVkxUQUI1WFgza2dPV2FuUEtVZTR1eTE4NVBhdmR4U2gvdWllY3kzby81Q2pwZGQwSlMyTGlldjQiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxMDIuMTU5LjIzMy4yNDkiLCJuYW1lIjoibG91YXlraHJvdWYiLCJvaWQiOiI3ZWIzNjhjZC0wM2JiLTQ1ZmYtYjRiOC1lMjE1NGFkZGI2ZjkiLCJwdWlkIjoiMTAwMzIwMDA0RkRBMTYzMiIsInJoIjoiMC5BUjhBVFdiVzI3bE82MGFaMkZ4RHVoVThZVVpJZjNrQXV0ZFB1a1Bhd2ZqMk1CTWZBRzguIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiVnMxbFRQLU16QWRLMmxtTVlMa3FjRGFFX1g3ZFREb0Jkem1UM3VJV0VHSSIsInRpZCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsInVuaXF1ZV9uYW1lIjoibG91YXlraHJvdWZAaW5zYXQudS1jYXJ0aGFnZS50biIsInVwbiI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1dGkiOiJyaDJFNW52UXFFTy1HYkRWQkpVc0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfdGNkdCI6MTUwNDAxMjQ1Nn0.AaMFlx2UeJN6azhruX8gsB08QGdhyRtW9xbzwLaBGPxhRkHdc-p1Oq6krSAFqdGf18MTTLK2UvWb4GpfltVo6DznL42j0vcO2CvjM4NhE-sWMs1RHp1CwqXTqaev8wsy_3BSjYorpUUxPf-Fftu0EE9HY8GqpcAjeOmrX46pacAwE_c7PlH_1U3QXJBAMBE__BWVT40t8ROqzjaYuz5JOeeIJNMJXsJnYhOk8Q77yfzrQQmOHegVvKp6D_6AaxW3AP56BNOLdBycAaKFNZwUs3amHVbb57sEkwR4rlOZ2oEb9c00YW8mbS2TOj1LccN_8XjadMDX9mse5bNj9YZ_9w"
    const extractVmName = (resourceGroupName) => {
        return resourceGroupName.substring(0, resourceGroupName.lastIndexOf("-resource-group"));
      };
    useEffect(() => {
     // const subscriptionId=localStorage.getItem("subscription_id");
     //const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
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
// Extract storage account name 
useEffect(() => {
  // const subscriptionId=localStorage.getItem("subscription_id");
  //const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
   //const resourceGroupName = 'pfa';

  rgs.forEach(rg=>{
    const apiVersion="2022-09-01"
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
  setStorageAccounts(data.value);
})
.catch(error => {
  console.error(error);
});
  })
   
 }, []);
    return(
        <>
     <div>
      <h2>Storage Accounts</h2>
      <ul>
        {storageAccounts.map(account => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>
    </div>
        </>
    )
}
export default Sidebar;