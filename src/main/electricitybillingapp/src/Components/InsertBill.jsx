import React from 'react'
import Allservices from '../Service/Allservices';
import { useNavigate, Link } from "react-router-dom"

export default function InsertBill() {
  let navigate = useNavigate();
  const [bill, setBill] = React.useState({
    billId: "",
    unitAmount: "",
    billAmount: "",
    billPaidStatus:"",
    
  });

  const { unitAmount,billAmount,billPaidStatus } = bill;
  const handleChange = (e) => {
    setBill({ ...bill, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    await Allservices.Addbill(bill);
    alert('Data inserted successfully');
    navigate("/bill");
  };

    
  return (
    <div>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title" data-testid="addbillheader">Add Bill</h1>
            </div>
            <div className="card-body">
              <form onSubmit={onsubmit}>
                <div className="form-group row">
                  <label for="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">UnitAmount</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control form-control-sm"
                      id="colFormLabelSm"
                      placeholder="Enter unitAmount"
                      name='unitAmount'
                      defaultValue={unitAmount}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">BillAmount</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="colFormLabel"
                      name='billAmount'
                      defaultValue={billAmount}
                      onChange={handleChange}
                      required
                      placeholder="Enter BillAmount"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">BillPaidStatus</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="colFormLabel"
                      name='billPaidStatus'
                      defaultValue={billPaidStatus}
                      onChange={handleChange}
                      required
                      placeholder="Enter BillPaidStatus"
                    />
                  </div>
                </div>
                
               
                <div className="form-group row">
                  <div className="col-sm-9 offset-sm-3">
                    <input type='submit' value="Insert" name='Insert' className="btn btn-primary p-1 m-2 "/>
                    <Link to="/bill"><button className="btn btn-warning p-1 m-2 ">Back</button></Link>  
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
