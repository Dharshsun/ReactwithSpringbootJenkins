import React, { useEffect } from 'react'
import Allservices from '../Service/Allservices';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserTable(){
    const[user, setUser] = useState([]);
    const [userId, setuserId] = useState("");
    useEffect(() => {
        const getAllUser = async () => {
          try {
            const response = await Allservices.Findalluser();
            console.log(response.data)
            setUser(response.data);
          } catch (error) {
            console.log("Error fetching student data:", error);
          }
        };
        getAllUser();
      }, []);
      const removeUser= async(e,userId)=>{
        e.preventDefault();
        
        
        if(window.confirm('Are you sure?'))
        {
            await  Allservices.Deleteuser(userId);
            setuserId(userId);
            window.location.reload();
            }
            else{
                alert("cancelled");
            }
        }
    return (
        <div>
        <div style={{marginLeft:"2%",marginRight:"20%",marginTop:"3%", height:"400px",width:"1200px",overflow: "auto"}} className="card" >
         <div className="container mt-4">
         <div className='card-header'><h1 className="text-center" data-testid="userlist" >UserList</h1>
        
        <Link className="btn btn-btn-outline-light me-6 " to="/insertuser">
            <button class="btn btn-success btn-lg">Add User</button>
          </Link>
          </div>
          <div className='card-body'>
        <table className="table table-hover table-striped"style={{fontSize: "25px"}}>
  
          <thead style={{backgroundColor: "black",color:"white", fontWeight:"bold"}} >
            <tr>
              <th className="text-center" style={{width:"30px",height:"auto",fontSize:"20px"}}>ID</th>
              <th className="text-center" style={{width:"60px"}}>userName</th>
              <th className="text-center" style={{width:"60px"}}>userLocation</th>
              <th className="text-center" style={{width:"60px"}}>userSubsidies</th>
              <th className="text-center" style={{width:"60px"}}>tariffId</th>
              <th className="text-center" style={{width:"60px"}}>billId</th>
              <th className="text-center"  style={{width:"50px"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr key={item.userId}>
                <td>{item.userId}</td>
                <td>{item.userName}</td>
                <td>{item.userLocation}</td>
                <td>{item.userSubsidies}</td>
                <td>{item.tariff.tariffId}</td>
                <td>{item.bill.billId}</td>
                
                <td className="d-flex justify-content-between">           
                <button
                id='remove'
                    className="btn btn-danger btn-lg"
                    onClick={(e) => removeUser(e, item.userId)}
                  >
                    Remove
                  </button> 
                
               
                   <Link to={`/update/${item.userId}`}>
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


