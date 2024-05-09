
import React from 'react'
import Allservices from '../Service/Allservices';
import { useNavigate, Link } from "react-router-dom"

export default function InsertUser() {
  let navigate = useNavigate();
  const [user, setUser] = React.useState({});

  const { userName, userLocation, userSubsidies } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    console.log(user)
    e.preventDefault();
    const { userName, userLocation, userSubsidies, billId, tariffId } = user;
    const inData = { userName, userLocation, userSubsidies, bill: { billId }, tariff: { tariffId } }
    await Allservices.Adduser(inData);
    alert('Data inserted successfully');
    navigate("/");
  };


  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title" data-testid="adduser">Add User</h1>
              </div>
              <div className="card-body">
                <form onSubmit={onsubmit}>
                  <div className="form-group row">
                    <label for="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">UserName</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="Enter userName"
                        name='userName'
                        defaultValue={userName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="colFormLabel" className="col-sm-3 col-form-label">UserLocation</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="colFormLabel"
                        name='userLocation'
                        defaultValue={userLocation}
                        onChange={handleChange}
                        required
                        placeholder="Enter UserLocation"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="colFormLabel" className="col-sm-3 col-form-label">UserSubsidies</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="colFormLabel"
                        name='userSubsidies'
                        defaultValue={userSubsidies}
                        onChange={handleChange}
                        required
                        placeholder="Enter Subsidies"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label for="colFormLabel" className="col-sm-3 col-form-label">billId</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="colFormLabel"
                        name='billId'

                        onChange={handleChange}
                        required
                        placeholder="Enter billId"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="colFormLabel" className="col-sm-3 col-form-label">tariffId</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="colFormLabel"
                        name='tariffId'

                        onChange={handleChange}
                        required
                        placeholder="Enter TariffId"
                      />
                    </div>
                  </div>


                  <div className="form-group row">
                    <div className="col-sm-9 offset-sm-3">
                      <input type='submit' value="Insert" name='Insert' className="btn btn-primary p-1 m-2 " />
                      <Link to="/"><button className="btn btn-warning p-1 m-2 ">Back</button></Link>
                    </div>
                    <div className="col-sm-9 offset-sm-3">

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
