import React, { useState , useEffect} from 'react';
import axios from "axios";
import Navbar from '../../components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function SalePage() {
  const [sales, setSales] = useState([]);
  // useState([
  //   // An array of sale objects
  //   // Replace this with your actual data
  //   {
  //     id: '1',
  //     name: 'vasanth',
  //     customer_id: '23',
  //     opportunity_id: '12',
  //     date: '02/03/2002',
  //     amount: '60000',
  //     notes: 'its open and should initiate',
  //   },
  //   {
  //     id: '2',
  //     name: 'kiran',
  //     customer_id: '45',
  //     opportunity_id: '56',
  //     date: '12/08/2012',
  //     amount: '4500',
  //     notes: 'its open and should initiate',
  //   },
  //   {
  //     id: '3',
  //     name: 'raj',
  //     customer_id: '56',
  //     opportunity_id: '90',
  //     date: '02/03/2019',
  //     amount: '59000',
  //     notes: 'its open and should initiate',
  //   },
  //   {
  //     id: '4',
  //     name: 'sandy',
  //     customer_id: '23',
  //     opportunity_id: '89',
  //     date: '12/02/2009',
  //     amount: '5000',
  //     notes: 'its open and should initiate',
  //   },
  // ]);
  useEffect(() => {
    fetch("http://localhost:8080/crm/sale")
    .then(res => res.json())
    .then((result)=>{
      setSales(result)
      console.log(sales);
    })

    
},[])
 const [searchQuery, setSearchQuery] = useState('');
const [createMode, setCreateMode] = useState(false);
const [formData, setFormData] = useState({
  id: '',
  name: '',
  customer_id: '',
  opportunity_id: '',
  date: '',
  amount: '',
  notes: '',
});

const [selectedSales, setSelectedSales] = useState([]);
const [viewSale , setViewSale] = useState(null);


const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};

const handleFormChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleCreateClick = () => {
  setCreateMode(true);
  setFormData({
    id: '',
    name: '',
    customer_id: '',
    opportunity_id: '',
    date: '',
    amount: '',
    notes: '',
  });
};

const handleFormSubmit = (e) => {
  
  e.preventDefault();
  let updatedSales;
  if (selectedSales.length === 1) {
    updatedSales = sales.map((sale) => {
      if (sale.id === selectedSales[0]) {
        return {
          ...sale,
          name: formData.name,
          customer_id: formData.customer_id,
          opportunity_id: formData.opportunity_id,
          date: formData.date,
          amount: formData.amount,
          notes: formData.notes,
        };
      }
      
      return sale;
    });
  } else {
   
    const newLead = {
      id: sales.length + 1,
      name: formData.name,
      customer_id: formData.customer_id,
      opportunity_id: formData.opportunity_id,
      date: formData.date,
      amount: formData.amount,
      notes: formData.notes,
    };
    updatedSales = [...sales, newLead];
    fetch("http://localhost:8080/crm/sale",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newLead)

  }).then(()=>{
    console.log("New Sales Added");
  });
  }


  setSales(updatedSales);
  setSelectedSales([]);
  setCreateMode(false);
  setFormData({
    id: '',
    name: '',
    customer_id: '',
    opportunity_id: '',
    date: '',
    amount: '',
    notes: '',
  });
  
};

const handleBackClick = () => {
  setCreateMode(false);
};

const handleCheckboxChange = (saleId) => {
  const selectedIndex = selectedSales.indexOf(saleId);
  if (selectedIndex > -1) {
    // Lead already selected, remove from the list
    setSelectedSales(selectedSales.filter((id) => id !== saleId));
  } else {
    // Lead not selected, add to the list
    setSelectedSales([...selectedSales, saleId]);
  }
};

const handleDeleteSelected = async() => {
  const selectedSale = sales.find(
    (sale) => sale.id === selectedSales[0]
  );
  await axios.delete(`http://localhost:8080/crm/sale/${selectedSale.id}`);
  setSales(
    sales.filter((sale) => !selectedSales.includes(sale.id))
  );
  setSelectedSales([]);
  
};


const handleEditSelected = async () => {
  
  if (selectedSales.length === 1) {
    const selectedSale = sales.find(
      (sale) => sale.id === selectedSales[0]
    );

    // Create a copy of the selected sale
    const editedLead = {
      ...selectedSale,
    };
    
    // const loaduser =async()=>{
    //   await axios.get(`http://localhost:8080/sale/${selectedSale.id}`);
    //   setFormData(editedLead)
    // }
    await axios.put(`http://localhost:8080/crm/sale/${selectedSale.id}`,editedLead);
    setFormData(editedLead);
    setCreateMode(true);
    // useEffect(()=>
    // {
    //   loaduser()
    // },[])
}
  }

const handleViewSelected = async() => {
  if (selectedSales.length === 1) {
    const selectedSale = sales.find((sale) => sale.id === selectedSales[0]);
    const view = await axios.get(`http://localhost:8080/crm/sale/purchaseHistory/${selectedSale.id}`)
    const finalsale = {...selectedSale,Purchase_History :view.data}
    console.log(finalsale);
    setViewSale(finalsale);
  }
};

const handleViewClose = () => {
  setViewSale(null);
};
return (
  <div>
    <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Sales History</h2>
        <div>
          {!createMode && (
            <button className="btn btn-primary" onClick={handleCreateClick}>
              Create
            </button>
          )}
        </div>
      </div>
      {createMode ? (
        <div>
          <button className="btn btn-primary mb-3" onClick={handleBackClick}>
            Back
          </button>
          <form onSubmit={handleFormSubmit}>
            {/* Lead form inputs */}
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Customer_id</label>
              <input
                type="text"
                className="form-control"
                id="customer_id"
                name="customer_id"
                value={formData.customer_id}
                onChange={handleFormChange}
              />
            </div>
           
            <div className="form-group">
              <label htmlFor="opportunity_id">Opportunity_id</label>
              <input
                type="text"
                className="form-control"
                id="opportunity_id"
                name="opportunity_id"
                value={formData.opportunity_id}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date"
               className="form-control"
              name="date" 
              value={formData.date} 
              onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                className="form-control"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                className="form-control"
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleFormChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {createMode ? 'Create' : 'Update'}
            </button>
          </form>
        </div>
      ) : viewSale ? (
        <div className="view-overlay">
          <div className="view-content">
            <button className="btn btn-primary mb-3" onClick={handleViewClose}>
              Close
            </button>
            <div>
              <h3>Sale Details</h3>
              <p>ID: {viewSale.id}</p>
              <p>Name: {viewSale.name}</p>
              <p>Customer Id: {viewSale.customer_id}</p>
              <p>Opportunity Id: {viewSale.opportunity_id}</p>
              <p>Amount: {viewSale.amount}</p>
              <p>Date: {viewSale.date}</p>
              <p>Notes: {viewSale.notes}</p>
              <p>Purchase_History: {viewSale.Purchase_History}</p>

            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Table displaying sales */}
         <div className="mb-3">
            {selectedSales.length > 0 && (
              <div className="dropdown d-inline-block">
                <div className="btn-group dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <div className="dropdown-menu">
                    <button className="dropdown-item" onClick={handleDeleteSelected}>
                      Delete
                    </button>
                    <button className="dropdown-item" onClick={handleEditSelected}>
                      Edit
                    </button>
                    <button className="dropdown-item" onClick={handleViewSelected}>
                        View
                      </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectedSales.length === sales.length}
                    onChange={() => {
                      if (selectedSales.length === sales.length) {
                        setSelectedSales([]);
                      } else {
                        const allLeadIds = sales.map((sale) => sale.id);
                        setSelectedSales(allLeadIds);
                      }
                    }}
                  />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Customer_id</th>
                <th>Opportunity_id</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {sales
                .filter((sale) => {
                  const { id, name, amount } = sale;
                  const search = searchQuery.toLowerCase();
                  return (
                    id.toString().toLowerCase().includes(search) ||
                    name.toLowerCase().includes(search) ||
                    amount.toLowerCase().includes(search)
                  );
                })
                .map((sale) => (
                  <tr key={sale.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedSales.includes(sale.id)}
                        onChange={() => handleCheckboxChange(sale.id)}
                      />
                    </td>
                    <td>{sale.id}</td>
                    <td>{sale.name}</td>
                    <td>{sale.customer_id}</td>
                    <td>{sale.opportunity_id}</td>
                    <td>{sale.date}</td>
                    <td>{sale.amount}</td>
                    <td>{sale.notes}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
);
    }

