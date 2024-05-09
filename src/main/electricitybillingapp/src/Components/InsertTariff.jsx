import React from 'react'
import Allservices from '../Service/Allservices';
import { useNavigate, Link } from "react-router-dom"

export default function InsertTariff() {
  let navigate = useNavigate();
  const [tariff, setTariff] = React.useState({
    tariffId: "",
    tariffCategory: "",
    tariffAmount: "",
    tariffStatus:"",
    
  });

  const { tariffCategory,tariffAmount,tariffStatus } = tariff;
  const handleChange = (e) => {
    setTariff({ ...tariff, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    await Allservices.Addtariff(tariff);
    alert('Data inserted successfully');
    navigate("/tariff");
  };

    
  return (
    <div>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title" data-testid="header">Add Tariff</h1>
            </div>
            <div className="card-body">
              <form onSubmit={onsubmit}>
                <div className="form-group row">
                  <label for="colFormLabelSm" role="tariffcategory" className="col-sm-3 col-form-label col-form-label-sm">tariffCategory</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control form-control-sm"
                      id="colFormLabelSm"
                      placeholder="Enter tariffCategory"
                      name='tariffCategory'
                      defaultValue={tariffCategory}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" role="tariffamount" className="col-sm-3 col-form-label">tariffAmount</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="colFormLabel"
                      name='tariffAmount'
                      defaultValue={tariffAmount}
                      onChange={handleChange}
                      required
                      placeholder="Enter tariffAmount"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" role="tariffstatus" className="col-sm-3 col-form-label">tariffStatus</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="colFormLabel"
                      name='tariffStatus'
                      defaultValue={tariffStatus}
                      onChange={handleChange}
                      required
                      placeholder="Enter tariffStatus"
                    />
                  </div>
                </div>
                
               
                <div className="form-group row">
                  <div className="col-sm-9 offset-sm-3">
                    <input type='submit' value="Insert" name='Insert' className="btn btn-primary p-1 m-2 "/>
                    <Link to="/tariff"><button className="btn btn-warning p-1 m-2 ">Back</button></Link>  
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
