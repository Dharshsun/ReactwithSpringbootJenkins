import './App.css';
import TariffTable from './Components/TariffTable';
import BillTable from './Components/BillTable';
import UserTable from './Components/UserTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import InsertBill from './Components/InsertBill';
import InsertTariff from './Components/InsertTariff';
import InsertUser from './Components/InsertUser';
import UpdateTariff from './Components/UpdateTariff';
import UpdateUser from './Components/UpdateUser';
function App() {
  return (
    
    <div className='App'>
      {/* <h1>JEST</h1> */}
      {/* <label data-testid="test1">Sample</label> */}
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<UserTable/>}></Route>
          <Route exact path="/bill" element={<BillTable/>}></Route>
          <Route exact path="/tariff" element={<TariffTable/>}></Route>
          <Route exact path="/insertbill" element={<InsertBill />}></Route>
          <Route exact path="/inserttariff" element={<InsertTariff />}></Route>
          <Route exact path="/insertuser" element={<InsertUser />}></Route>
          <Route exact path="/updates/:tariffId" element={<UpdateTariff />}></Route>
          <Route exact path="/update/:userId" element={<UpdateUser />}></Route>
          </Routes>
    </Router>
    </div>
//     <>
// <TariffTable/>
// <BillTable/>
// <UserTable/>
// </>
  );
}

export default App;
