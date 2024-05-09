import React, { useEffect } from 'react'
import Allservices from '../Service/Allservices';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TariffTable(){
    const[tariff, setTariff] = useState([]);
    const [tariffId, settariffId] = useState("");
    useEffect(() => {
        const getAllTariff = async () => {
          try {
            const response = await Allservices.Findalltariff();
            console.log(response.data)
            setTariff(response.data);
          } catch (error) {
            console.error("Error fetching student data:", error);
          }
        };
        getAllTariff();
      }, []);
      const removeTariff= async(e,tariffId)=>{
        e.preventDefault();
        
        
        if(window.confirm('  Are you sure?'))
        {
            await  Allservices.Deletetariff(tariffId);
            settariffId(tariffId);
            window.location.reload();
            // navigate("/homelib")
            }
            else{
                alert("cancelled");
            }
        }
    return (
        <div>
        <div style={{marginLeft:"2%",marginRight:"20%",marginTop:"3%", height:"400px",width:"1200px",overflow: "auto"}} className="card" >
         <div className="container mt-4">
         <div className='card-header'><h1 className="text-center" data-testid="tarifflist">Tariff List</h1>
        
        <Link className="btn btn-btn-outline-light me-6 " to="/inserttariff">
            <button name ="Add Tariff" class="btn btn-success btn-lg">Add Tariff</button>
          </Link>
          </div>
          <div className='card-body'>
        <table className="table table-hover table-striped"style={{fontSize: "25px"}}>
  
          <thead style={{backgroundColor: "black",color:"white", fontWeight:"bold"}} >
            <tr>
              <th className="text-center" style={{width:"30px",height:"auto",fontSize:"20px"}}>ID</th>
              <th className="text-center" style={{width:"60px"}}>tariffCategory</th>
              <th className="text-center" style={{width:"60px"}}>tariffAmount</th>
              <th className="text-center" style={{width:"60px"}}>tariffStatus</th>
              <th className="text-center"  style={{width:"50px"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tariff.map((item) => (
              <tr key={item.tariffId}>
                <td>{item.tariffId}</td>
                <td>{item.tariffCategory}</td>
                <td>{item.tariffAmount}</td>
                <td>{item.tariffStatus}</td>
                
                <td className="d-flex justify-content-between">           
                <button
                    className="btn btn-danger btn-lg"
                    onClick={(e) => removeTariff(e, item.tariffId)}
                  >
                    Remove
                  </button> 
                
               
                   <Link to={`/updates/${item.tariffId}`}>
                    <button className="btn btn-primary btn-lg">Update</button>
                  </Link>
               
                 
                  
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


