
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import Sales from './pages/Sales/Sales';
import Statistics from './pages/Statistics/Statistics';
import Tasks from './pages/Tasks/Tasks';
import Tickets from './pages/Tickets/Tickets';
import SideBar from './components/SideBar';
import TaskCreate from './pages/Tasks/TaskCreate'
import TicketCreate from './pages/Tickets/TicketCreate';
import SaleCreate from './pages/Sales/SaleCreate';
import CustomerCreate from './pages/Customers/CustomerCreate';
import Emails from './pages/Emails/Email';
import Opportunities from './pages/Opportunities/Opportunities';
import OpportunityCreate from './pages/Opportunities/OpportunityCreate';
import Leads from './pages/Leads/Leads';
import LeadCreate from './pages/Leads/LeadCreate';


function App() {
 
  return (
 
   <Router>
    <SideBar>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/tickets" element={<Tickets/>}/>
      <Route path="/emails" element={<Emails/>}/>
      <Route path="/opportunities" element={<Opportunities/>}/>
      <Route path="/leads" element={<Leads/>}/>
      <Route path="/tasks/createTask" element={<TaskCreate/>}/>
      <Route path="/tickets/createTicket" element={<TicketCreate/>}/>
      <Route path="/sales/createSale" element={<SaleCreate/>}/>
      <Route path="/customers/createCustomer" element={<CustomerCreate/>}/>
      <Route path="/opportunities/createOpportunity" element={<OpportunityCreate/>}/>
      <Route path="/leads/createLead" element={<LeadCreate/>}/>
      <Route path="*" element={<>not found</>}/>
    </Routes>
    </SideBar>
   </Router>
  );
}

export default App;
