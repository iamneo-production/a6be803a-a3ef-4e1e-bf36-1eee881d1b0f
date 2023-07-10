
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import Sales from './pages/Sales/Sales';
import Statistics from './pages/Statistics/Statistics';
import Tasks from './pages/Tasks/Tasks';
import Tickets from './pages/Tickets/Tickets';
import Leads from './pages/Leads/Leads';
import Opportunities from './pages/Opportunities/Opportunities';
import SideBar from './components/SideBar';
import Navbar from './layout/Navbar';


function App() {
 
  return (
 
   <Router>
    <SideBar>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/customer" element={<Customers/>}/>
      <Route path="/sale" element={<Sales/>}/>
      <Route path="/stage" element={<Statistics/>}/>
      <Route path="/task" element={<Tasks/>}/>
      <Route path="/ticket" element={<Tickets/>}/>
      <Route path="/lead" element={<Leads/>}/>
      <Route path="oppo" element={<Opportunities/>}/>
      <Route path="*" element={<>not found</>}/>
    </Routes>
    </SideBar>
   </Router>
  );
}

export default App;
