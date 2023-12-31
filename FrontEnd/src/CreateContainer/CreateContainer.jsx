import NavbarAfterlogin2 from "../NavbarAfterlogin2";
import './CreateContainer.css'
import { useRef ,useState } from 'react';
function CreateRepo()
{
    const RepoRef = useRef()
    const StorageRef = useRef();
    const submitData = async (e) => {
        e.preventDefault();
        
        try {
          const requestBody = {
            subscription_id:"94bdf75f-0db0-45e0-bb43-ff113d14ea1f",
            resource_group_location:"north europe",
            storage_account_name: RepoRef.current.value,
            container_name:StorageRef.current.value
          };
          
          // Make API request
          const response = await fetch('http://backend-svc:4000/triggerPipelineContainer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
          if (!response.ok) {
            throw new Error('Failed to submit form');
          }
          alert('Form submitted successfully!');
         // navigate("/PipelineStatus")
    
        } catch (error) {
          console.error(error);
          alert('Failed to submit form');
        }
      };
return(
    <>
    <NavbarAfterlogin2></NavbarAfterlogin2>
    <h5 className="typewriter"><span>Fill the form to create your Container !</span></h5>
    <div className="form">
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Storage Account name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Same Name as the previous Form" ref={RepoRef}></input>

</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Container Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Container Name" ref={StorageRef}></input>

</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 submit" onClick={submitData}>Create</button>
  </div>
</div>
    </>
)

}
export default CreateRepo;