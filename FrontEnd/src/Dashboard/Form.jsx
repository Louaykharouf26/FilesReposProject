import NavbarAfterlogin from "../NavbarAfterlogin";

function Form()
{
    return(
        <>
        <NavbarAfterlogin></NavbarAfterlogin>
        <div className="form">
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
        </>
    )
}
export default Form;