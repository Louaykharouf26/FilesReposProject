import NavbarAfterlogin2 from "../NavbarAfterlogin2";
import Sidebar from "./Sidebar";
import './ContainerDetails.css';
import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function ContainerDetails()
{
  
  
    const [rgs, setRgs] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const [storageaccounts,setStorageAccount] = useState([]);
    const [containers,setContainers] = useState([]);
    const [notifications, setNotifications] = useState([]);

    const subscriptionId="94bdf75f-0db0-45e0-bb43-ff113d14ea1f";
    const azureAuthToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjkwODg3NzI1LCJuYmYiOjE2OTA4ODc3MjUsImV4cCI6MTY5MDg5MTc2NSwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQU1sMUpvcWR5bGRiVGNkd1AxQkcxb2pFYmJENjFYWm5keExNVDF1YlUvU0VkMzBlVlpVZm5wbExPZ3NLcXFIL3QiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiI0MS42Mi4yNDcuMTYzIiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiU0EteEl6QzdqMHllZkw0SW00SWtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.WTU9ZhdltA6fs5yNJOP9avCx717JR5MD1pAP_7mmuz5wzeMi5tdmPw84x1zqkw0qNLiY_MD1tX4dUuLklVJws4fup8_b6aJxpJkr2Br_mXL6aFTW_blxynyOMq-jp_3gf9XY6H2a1TG4RD2jv8ZPxVapjDgYjoENE5MY34hZA6CjoHRcQLAZ6BUcFqEynQ27n-uYbFk62V_djD9dFmPyee3HwbkItCDMrG_OTt9yK2VZTHQXz8lm2Pa1Lll4ZigBdPQXZFjOS27SNNK3lcnnR5-ejW4tuDvoN6NymHFnj2LJY_SO7jXS3XtmHhaPW8SqHIOhwymLnEIXnKnbJv3uUg"
    const extractVmName = (resourceGroupName) => {
        return resourceGroupName.substring(0, resourceGroupName.lastIndexOf("-resource-group"));
      };
      const [blobs, setBlobs] = useState([]);

      useEffect(() => {
        // Fetch the blob names from the backend API
        fetch('http://localhost:4000/listblobs')
          .then((response) => response.json())
          .then((data) => setBlobs(data.slice(2).map((blobName) => blobName.trim())))
          .catch((error) => console.error('Error fetching blob names:', error));
      }, []);
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
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
      }, [rgs, subscriptionId, azureAuthToken]);
      console.log(storageaccounts)
      //Fetch the list of containers 
      useEffect(() => {
        //const subscriptionId = '94bdf75f-0db0-45e0-bb43-ff113d14ea1f';
       // const azureAuthToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEvIiwiaWF0IjoxNjg1MzgzODM3LCJuYmYiOjE2ODUzODM4MzcsImV4cCI6MTY4NTM4ODU3MywiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQWpYZjg0YTRRT2hITmU5eFRBNHlsZ1pUR1p1WGNPY3daUTRDUDFwWTh1TEE2RERlMlU0WmhuYnlPaUN1Q21vZTQiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZ3JvdXBzIjpbImY1MDU3OGRiLTczYjctNGMzOC05MDAwLTA5MWY4OGQxNjZlNCJdLCJpcGFkZHIiOiIxOTcuMTYuMTY0LjExIiwibmFtZSI6ImxvdWF5a2hyb3VmIiwib2lkIjoiN2ViMzY4Y2QtMDNiYi00NWZmLWI0YjgtZTIxNTRhZGRiNmY5IiwicHVpZCI6IjEwMDMyMDAwNEZEQTE2MzIiLCJyaCI6IjAuQVI4QVRXYlcyN2xPNjBhWjJGeER1aFU4WVVaSWYza0F1dGRQdWtQYXdmajJNQk1mQUc4LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlZzMWxUUC1NekFkSzJsbU1ZTGtxY0RhRV9YN2RURG9CZHptVDN1SVdFR0kiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6ImxvdWF5a2hyb3VmQGluc2F0LnUtY2FydGhhZ2UudG4iLCJ1cG4iOiJsb3VheWtocm91ZkBpbnNhdC51LWNhcnRoYWdlLnRuIiwidXRpIjoiUy1kY21KUXp1VU9sdGFKSkprRkhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3RjZHQiOjE1MDQwMTI0NTZ9.FQBSUgd-1FZwA221EriZUjX2I0zFSJodead0LB6vDxlx9lyJU0ClV1ez8yBzW17ReUNl2derCwK486o1E7p-O7LctrxcvU8--fbOq0eI1khEFtXOhJuHuorVqdrEjZrI37S2LizcPRGD-hroytpkb5RBXtPnW3m8kVSnicpK1e-9WbuC8HHbsB4bs1YQv4Vk680ncSrVmpTsA3k8LOcr_F487vRyafrTyQ1cIXAkWa5T7YsipHE40IQ5XHIKA2W-Vfc7noFNBuEYOFG179ATuCZn0FWKzzD1leiImqQFOybalzkgmYRkPH7nW9xmLxN9wIY1c_ZWFCu-hTJEKm3tjw';
        const apiVersion = '2022-09-01';
    
      
        rgs.forEach(rg =>{
          storageaccounts.forEach(storage=>{
            const apiEndpoint = `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/${rg.name}/providers/Microsoft.Storage/storageAccounts/${storage.name}/blobServices/default/containers?api-version=${apiVersion}`;
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
              setContainers(data.value);
             // console.log(storageaccounts)
            })
            .catch(error => {
              console.error(error);
            });
          })
          })
          
      }, [rgs, storageaccounts, subscriptionId, azureAuthToken]);
      // Upload Files 
     
      function createFile(filename, content) {
        const element = document.createElement('a');
        const blob = new Blob([content]);
        const fileURL = URL.createObjectURL(blob);
      
        element.href = fileURL;
        element.download = filename;
        element.click();
      
        URL.revokeObjectURL(fileURL);
      }
      
      async function  getFullPathFromInput (event)  {
        const file = event.target.files[0];
        console.log(file.name);
        const fullPath = event.target.value; // Full path (including filename)
        console.log(fullPath); // You can do whatever you need with the full path here
      
        // Additional file processing if needed
        const reader = new FileReader();
        reader.onload = () => {
          const fileContent = reader.result;
          console.log(fileContent); // You can access the file content here
      
          // Create a new file with the same name
          const filename = file.name;
          createFile(filename, fileContent);
        };
        reader.readAsArrayBuffer(file); // Read the file content as an ArrayBuffer
      
         
         
              
              try {
                const requestBody = {
                  Blob1Name:file.name,
                  filename:file.name
                };
                
                // Make API request
                const response = await fetch('http://localhost:4000/uploadfile', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(requestBody)
                });
                if (!response.ok) {
                  throw new Error('Failed to submit form');
                }
                alert('File uploaded successfully! Refresh in a while to get the list of files');
               // navigate("/PipelineStatus")
          
              } catch (error) {
                console.error(error);
                alert('Failed to submit form');
              }
      }   
      const handleDeleteBlob = (blobName, index) => {
        fetch('http://localhost:4000/deletefile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ blobName }),
        })
          .then((response) => {
            if (response.ok) {
              // Blob deleted successfully, update the frontend state with the deleted blob name
    
              // Parse the response JSON to get the list of deleted blobs along with their statuses
              response.json().then((data) => {
                const { deletedBlobs } = data;
    
                // Construct custom notification texts based on the statuses
                const notificationTexts = deletedBlobs.map((blob) => {
                  const statusText = blob.status ? 'successfully' : 'unsuccessfully';
                  return `Blob '${blob.blobName}' was deleted ${statusText}.`;
                });
    
                // Update the notifications state with the custom notification texts
                setNotifications((prevNotifications) => [...prevNotifications, ...notificationTexts]);
    
                // Update the blobs state to remove the deleted blob from the frontend display
                const updatedBlobs = blobs.filter((_, i) => i !== index);
                setBlobs(updatedBlobs);
              });
            } else {
              console.error('Error deleting blob:', response.status);
            }
          })
          .catch((error) => console.error('Error deleting blob:', error));
      };
    
  // ... (rest of the code)


      return(<>
<NavbarAfterlogin2 notifications={notifications}></NavbarAfterlogin2>
<Sidebar></Sidebar>
<h5 className="typewriter">Welcome!  <span>List your files , Add , Delete , update a file !</span></h5>
<p className="welcome">Here is some details about your container </p>
<p className="detail1">{containers.name}</p>
{containers.map(storage => (
    <>
            <p className="detail1">Container Name : {storage.name}</p>
            <p className="detail2">Container Privacy : {storage.properties.publicAccess}</p>
            </>
          ))}
          {
            rgs.map(rg=>(
                <><p className="detail0">Ressource Groupe relative to the container : {rg.name}</p></>
                
            ))
          }
           {
            storageaccounts.map(rg=>(
                <><p className="detail3">Storage Account relative to the container : {rg.name}</p></>
                
            ))
          }
           <div className="detail4">
      <h2>File Uploader (upload file by file)</h2>
      <div>
      
      <input type="file" onChange={getFullPathFromInput} />
    </div>
    </div>
    <div className="details5">
      <h2>Here is the list of files in the Container </h2>
      <div>
      
      {blobs.map((blobName, index) => (
        <div key={index} className="blob-container">
          <p className="blob-name">{blobName}</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeleteBlob(blobName)}
          >
            Delete
          </button>
        </div>
      ))}
        
    </div>
 
    </div>

</>
)

}
export default ContainerDetails;