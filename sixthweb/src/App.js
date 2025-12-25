// import { use } from 'react';
import { useState } from 'react';
import './App.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
// import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: ""
  });

  let [userData, setUserData] = useState([]);

  let getValues = (e) => {
    let oldData = { ...formData };
    let inputName = e.target.name;
    let inputValue = e.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);

  }
  let handleSubmit = (e) => {
    e.preventDefault();
    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    }
    if (formData.index === "") {
      let checkFilterUser = userData.filter((data) => data.uemail === formData.uemail || data.uphone === formData.uphone);
      if (checkFilterUser.length > 0) {
        toast.error("Email or Number is already exists");
      }
      else {
        let oldUserData = [...userData, currentUserFormdata];
        setUserData(oldUserData);
        setFormData(
          {
            uname: "",
            uemail: "",
            uphone: "",
            umessage: "",
            index: ""
          }
        )

      }
    }
    else {
      let editIndex = formData.index;
      let oldData = userData;

      let checkFilterUser = userData.filter((data, index) => (data.uemail === formData.uemail || data.uphone === formData.uphone) && index !== editIndex);
      if (checkFilterUser.length === 0) {
        oldData[editIndex]["uname"] = formData.uname;
        oldData[editIndex]["uemail"] = formData.uemail;
        oldData[editIndex]["uphone"] = formData.uphone;
        oldData[editIndex]["umessage"] = formData.umessage;
        setUserData(oldData);
        setFormData(
          {
            uname: "",
            uemail: "",
            uphone: "",
            umessage: "",
            index: ""
          }
        )
        toast.success("Data Updated Successfully");
      } else {
        toast.error("Email or Number is already exists");
      }
    }
  }

  let deleteRow = (index) => {
    let filterDataafterDalete = userData.filter((data, i) => i !== index);
    setUserData(filterDataafterDalete);
    toast.success("Data Deleted Successfully");
  }
  let editRow = (indexNum) => {
    let editData = userData.filter((data, i) => i === indexNum)[0]
    editData['index'] = indexNum;
    setFormData(editData);
  }

  // let [uname, setuname]=useState("");
  // let [password, setpassword]=useState("");
  // let handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(uname, password);
  // }
  // // let getUname=(e)=>{
  // //   setuname(e.target.value);
  // //   console.log(uname);
  // // }

  return (
    <div className="App">
      <ToastContainer />
      <Container fluid>
        <Container>
          <Row>
            <Col className='text-center py-5'>
              <h1>Enquiry Now</h1>
            </Col>
          </Row>
          <Row>
            <Col ls={5}>
              {userData.length}
              <form onSubmit={handleSubmit}>
                <div className='pb-3'>
                  <label className='text-label'> Name </label>
                  <input type="text" onChange={getValues} value={formData.uname} className='form-control' name="uname" placeholder='Enter Your Full Name' />
                </div>
                <div className='pb-3'>
                  <label className='form-label'> Email </label>
                  <input type="email" onChange={getValues} value={formData.uemail} className='form-control' name="uemail" placeholder='Enter Your Email' />
                </div>
                <div className='pb-3'>
                  <label className='form-label'> Mobile Number </label>
                  <input type="number" onChange={getValues} value={formData.uphone} className='form-control' name="uphone" placeholder='Enter Your Mobile Number' />
                </div>
                <div className='pb-3'>
                  <label className='form-label'> Message </label>
                  <textarea onChange={getValues} value={formData.umessage} className='form-control' name="umessage" rows={3}></textarea>
                </div>

                <button className='btn btn-primary'>
                  {
                    formData.index === "" ? "Save" : "Update"
                  }
                </button>

              </form>
            </Col>
            <br />
            <Col ls={7}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length >= 1 ?
                    userData.map((data, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{data.uname}</td>
                          <td>{data.uemail}</td>
                          <td>{data.uphone}</td>
                          <td>{data.umessage}</td>
                          <td>
                            <button onClick={() => deleteRow(index)}> Delete</button>
                            <button onClick={() => editRow(index)}>Edit</button>
                          </td>
                        </tr>

                      )
                    })
                    :
                    <tr>
                      <td colSpan={6}>No Data Found</td>
                    </tr>
                  }
                </tbody>
              </Table>

            </Col>
          </Row>
        </Container>
      </Container>









      {/* <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={handleSubmit}>
              <div className='text-start my-3'>
                <label> Username </label>
                <input type="text" onChange={(e)=>setuname(e.target.value)} className='form-control' placeholder='Enter User Name' value={uname} />
              </div>
              <div className='text-start my-3'>
                <label> Password </label>
                <input type="password" onChange={(e)=>setpassword(e.target.value)} className='form-control' placeholder='Enter Password' value={password} />
              </div>
              <div className='text-start my-3'>
                <button type="submit"> Login </button>
                </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
