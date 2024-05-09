import React from 'react'
import Allservices from '../Service/Allservices';
import { useParams,useNavigate,Link } from "react-router-dom";
import { useEffect } from 'react';


export default function UpdateTariff() {
  let navigate = useNavigate();
  const {tariffId}=useParams();
  const [tariff, setTariff] = React.useState({
    tariffCategory: "",
    tariffAmount: "",
    tariffStatus:""
    
  });

  const { tariffCategory,tariffAmount,tariffStatus } = tariff;

  useEffect(()=>{

    Allservices.Findalltariff(tariffId).then((res)=>{  
        console.log(res.data)
        setTariff(res.data);        
     }).catch((err)=>console.log(err))  
 },[tariffId])

  const handleChange = (e) => {
    setTariff({ ...tariff, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    const { tariffCategory,tariffAmount,tariffStatus } = tariff;
    const inData = {tariffId,tariffCategory,tariffAmount,tariffStatus}
    await Allservices.Updatetariff(inData);
    alert('Data updated successfully');
    navigate("/tariff");
  };

    
  return (
    <div>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title" data-testid="updateTariff">Update Tariff</h5>
            </div>
            <div className="card-body">
              <form onSubmit={onsubmit}>
                <div className="form-group row">
                  <label for="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm" role="tariffcategory">tariffCategory</label>
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
                  <label for="colFormLabel" className="col-sm-3 col-form-label" role="tariffamount">tariffAmount</label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" id="colFormLabel"
                      name='tariffAmount'
                      defaultValue={tariffAmount}
                      onChange={handleChange}
                      required
                      placeholder="Enter tariffAmount"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label" role="tariffstatus" >tariffStatus</label>
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
                    <input type='submit' value="Update"  className="btn btn-primary p-1 m-2 "/>
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
