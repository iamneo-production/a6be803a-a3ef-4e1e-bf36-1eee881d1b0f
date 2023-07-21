
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import Sales from './pages/Sales/Sales';
import Analytics from './pages/Analytics/Analytics';
import Tasks from './pages/Tasks/Tasks';
import Tickets from './pages/Tickets/Tickets';
import SideBar from './components/SideBar';
import Emails from './pages/Emails/Email';
import Opportunities from './pages/Opportunities/Opportunities';
import Leads from './pages/Leads/Leads';


function App() {
 
  return (
 
   <Router>
    <SideBar>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/sales" element={<Sales/>}/>
      <Route path="/statistics" element={<Analytics/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/tickets" element={<Tickets/>}/>
      <Route path="/emails" element={<Emails/>}/>
      <Route path="/opportunities" element={<Opportunities/>}/>
      <Route path="/leads" element={<Leads/>}/>
      <Route path="*" element={<>not found</>}/>
    </Routes>
    </SideBar>
   </Router>
  );
}

export default App;
