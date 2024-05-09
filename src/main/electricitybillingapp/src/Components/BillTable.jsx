import React, { useEffect } from 'react'
import Allservices from '../Service/Allservices';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BillTable() {
  const [bill, setBill] = useState([]);
  const [setbillId] = useState("");
  useEffect(() => {
    const getAllBill = async () => {
      try {
        const response = await Allservices.Findallbill();
        console.log(response.data)
        setBill(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    getAllBill();
  }, []);
  const removeTariff = async (e, billId) => {
    e.preventDefault();


    if (window.confirm('  Are you sure?')) {
      await Allservices.Deletebill(billId);
      setbillId(billId);
      window.location.reload();
      // navigate("/homelib")
    }
    else {
      alert("cancelled");
    }
  }
  return (
    <div>
      <div style={{ marginLeft: "2%", marginRight: "20%", marginTop: "3%", height: "400px", width: "1200px", overflow: "auto" }} className="card" >
        <div className="container mt-4">
          <div className='card-header'><h1 className="text-center">Bill List</h1>

            <Link className="btn btn-btn-outline-light me-6 " to="/insertbill">
              <button class="btn btn-success btn-lg" data-testid="billbtn">Add Bill</button>
            </Link>
            {/* <label data-testid="labelbilltable">BillTable</label> */}
          </div>
          <div className='card-body'>
            <table className="table table-hover table-striped" style={{ fontSize: "25px" }}>

              <thead style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }} >
                <tr>
                  <th data-testid="billid" className="text-center" style={{ width: "30px", height: "auto", fontSize: "20px" }}>BillID</th>
                  <th data-testid="unitamount" className="text-center" style={{ width: "60px" }}>unitAmount</th>
                  <th data-testid="tariffAmount" className="text-center" style={{ width: "60px" }}>tariffAmount</th>
                  <th data-testid="billPaidStatus"className="text-center" style={{ width: "60px" }}>billPaidStatus</th>
                  <th className="text-center" style={{ width: "50px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bill.map((item) => (
                  <tr key={item.billId}>
                    <td>{item.billId}</td>
                    <td>{item.unitAmount}</td>
                    <td>{item.billAmount}</td>
                    <td>{item.billPaidStatus}</td>

                    <td className="d-flex justify-content-between">
                      <button
                        data-testid="removebutton"
                        className="btn btn-danger btn-lg"
                        onClick={(e) => removeTariff(e, item.billId)}
                      >
                        Remove
                      </button>



                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}


