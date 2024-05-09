import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    <div className="container-fluid" style={{ backgroundColor: 'black',height:150}}>
      <h1 style={{color:'whitesmoke'}} data-testid="addbillheader" >ELECTRICITY BILL SYSTEM</h1>
        <Link className="btn btn-btn-outline-light me-6  " to="/"><button className='btn btn-warning btn-lg' name="user">User</button>
       </Link>
      <Link className="btn btn-btn-outline-light me-6 " to="/bill"><button className='btn btn-info btn-lg' name="Bill">Bill</button>
       </Link>
       <Link className="btn btn-btn-outline-light me-6 " to="/tariff"><button className='btn btn-danger btn-lg' name="Tariff">Tariff</button>
       </Link>
       
      
    </div>
  )
}
