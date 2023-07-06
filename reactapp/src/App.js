import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';

import Stages from './pages/Stages';
import Task from './pages/Task';
import Ticket from './pages/Ticket';
import Lead from './pages/Lead';
import Oppo from './pages/Oppo';
import SideBar from './components/SideBar';

import Email from './pages/Email';
import Sale from './pages/Sale';



function App() {
 
  return (
 
   <Router>
   
    <SideBar>
    <Routes>
      
      <Route path="/" element={<Dashboard/>}/> 
      <Route path="/customer" element={<Customer/>}/>
      <Route path="/sale" element={<Sale/>}/>
      
      <Route path="/stage" element={<Stages/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/ticket" element={<Ticket/>}/>
      <Route path="/lead" element={<Lead/>}/>
      <Route path="/oppo" element={<Oppo/>}/>
      <Route path="/Email" element={<Email/>}/>
      <Route path="*" element={<>not found</>}/>
    </Routes>
    </SideBar>
   </Router>
  );
}

export default App;
