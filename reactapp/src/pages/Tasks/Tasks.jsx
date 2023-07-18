import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Tasks.css';
import { format } from 'date-fns';

const LEAD_BASE_REST_API_URL = 'https://8080-fadbdaaeeabdaaefeedabbcfeaeaadbdbabf.project.examly.io/crm/task';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [createMode, setCreateMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    assignedTo: {
        id:''
    },
    dueDate: '',
    completedAt: '',
  });
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [viewTask, setViewTask] = useState(null);
  const [create, setCreate] = useState(null);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    getAllTasks();
    console.log(selectedTasks)
  }, []);

  useEffect(()=>{
    console.log("useeffect"+formData)
    if(create){
        createTask();
    }
    if(update){
        updateTask();
    }
  },[formData])

  const getAllTasks = async () => {
    try {
      const response = await axios.get(LEAD_BASE_REST_API_URL);
      setTasks(response.data);
    } catch (error) {
      console.log('Error retrieving tasks:', error);
    }
  };

  const createTask = async () => {
    try {
      await axios.post(LEAD_BASE_REST_API_URL,formData);
      getAllTasks();
      setCreateMode(false);
      resetFormData();
      setCreate(false)
    } catch (error) {
      console.log('Error creating task:', error);
    }
  };

  const updateTask = async () => {
    try {
      const taskId = selectedTasks[0];
      await axios.put(`${LEAD_BASE_REST_API_URL}/${taskId}`, formData);
      getAllTasks();
      setCreateMode(false);
      resetFormData();
      setUpdate(false)
    } catch (error) {
      console.log('Error updating task:', error);
    }
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`${LEAD_BASE_REST_API_URL}/${selectedTasks[0]}`);
      getAllTasks();
      setSelectedTasks([]);
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormChange = (e) => {
    
    if(e.target.name=='assignedTo'){
        setFormData({
            ...formData,
            assignedTo: {
                id:e.target.value
            },
            });
    }else{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            });
    }
  };

  const handleCreateClick = () => {
    setCreateMode(true);
    resetFormData();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedTasks.length === 1) {
        setFormData({
            ...formData,
            completedAt: new Date(formData.completedAt).toISOString()
        })
        setUpdate(true);
    } else {
        setFormData({
            ...formData,
            dueDate: new Date(formData.dueDate).toISOString()
        })
        setCreate(true);
    }
  };

  const handleBackClick = () => {
    setCreateMode(false);
    resetFormData();
  };

  const handleCheckboxChange = (taskId) => {
    const selectedIndex = selectedTasks.indexOf(taskId);
    if (selectedIndex > -1) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
    console.log(selectedTasks);
  };

  const handleDeleteSelected = () => {
    deleteTask();
  };

  const handleEditSelected = () => {
    if (selectedTasks.length === 1) {
      setCreateMode(true);
      const selectedTask = tasks.find((task) => task.id === selectedTasks[0]);
      setFormData(selectedTask);
    }
  };

  const resetFormData = () => {
    setFormData({
        name: '',
        description: '',
        assignedTo: {
            id:''
        },
        dueDate: '',
        completedAt: '',
    });
  };

  const handleViewSelected = () => {
    if (selectedTasks.length === 1) {
      const selectedTask = tasks.find((task) => task.id === selectedTasks[0]);
      setViewTask(selectedTask);
    }
  };

  const handleViewClose = () => {
    setViewTask(null);
  };

  return (
    <div>
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Tasks</h2>
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
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleFormChange}
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignedTo">Assigned to</label>
                <input
                  type="text"
                  className="form-control"
                  id="assignedTo"
                  name="assignedTo"
                  value={formData.assignedTo.id}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dueDate">Due date</label>
                <input
                  type='date'
                  className="form-control"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleFormChange}
                  required
                >
                </input>
              </div>
              <div className="form-group">
                <label htmlFor="completedAt">Completed at</label>
                <input
                  type='date'
                  className="form-control"
                  id="completedAt"
                  name="completedAt"
                  value={formData.completedAt}
                  onChange={handleFormChange}
                >
                </input>
              </div>
              <button type="submit" className="btn btn-primary">
                {selectedTasks.length===0 ? 'Create' : 'Update'}
              </button>
            </form>
          </div>
        ) : viewTask ? (
          <div className="view-overlay">
            <div className="view-content">
              <button className="btn btn-primary mb-3" onClick={handleViewClose}>
                Close
              </button>
              <div>
                <h3>Task Details</h3>
                <p>ID: {viewTask.id}</p>
                <p>Name: {viewTask.name}</p>
                <p>Desc: {viewTask.description}</p>
                Assigned to:<p style={{border: '2px solid grey', borderRadius:'10px', padding: '10px',margin:'15px'}}> 
                    <p>ID: {viewTask.assignedTo.id}</p>
                    <p>Name: {viewTask.assignedTo.name}</p>
                    <p>Email ID: {viewTask.assignedTo.email}</p>
                </p>
                <p>dueDate: {format(new Date(viewTask.dueDate),'dd-MM-yyyy')}</p>
                {viewTask.completedAt!==null?<p>Completed At: {format(new Date(viewTask.completedAt),'dd-MM-yyyy')}</p>:<p>Completed At: NA</p>}
                <p>Created At: {format(new Date(viewTask.createdAt),'dd-MM-yyyy')}</p>
                <p>Updated At: {format(new Date(viewTask.completedAt),'dd-MM-yyyy')}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-3">
              {selectedTasks.length > 0 && (
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
                      {(selectedTasks.length===1)&&<button className="dropdown-item" onClick={handleEditSelected}>
                        Edit
                      </button>}
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
                      checked={selectedTasks.length === tasks.length}
                      onChange={() => {
                        if (selectedTasks.length === tasks.length) {
                          setSelectedTasks([]);
                        } else {
                          const allLeadIds = tasks.map((lead) => lead.id);
                          setSelectedTasks(allLeadIds);
                        }
                      }}
                    />
                  </th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Desc</th>
                  <th>AssignedTo</th>
                  <th>DueDate</th>
                  <th>Completed at</th>
                </tr>
              </thead>
              <tbody>
                {tasks
                  .filter((lead) => {
                    const { id, name, status } = lead;
                    const search = searchQuery.toLowerCase();
                    return (
                      id.toString().toLowerCase().includes(search) ||
                      name.toLowerCase().includes(search) ||
                      status.toLowerCase().includes(search)
                    );
                  })
                  .map((task) => (
                    <tr key={task.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedTasks.includes(task.id)}
                          onChange={() => handleCheckboxChange(task.id)}
                        />
                      </td>
                      <td>{task.id}</td>
                      <td>{task.name}</td>
                      <td>{task.description}</td>
                      <td>{task.assignedTo.id}</td>
                      <td>{format(new Date(task.dueDate),'dd-MM-yyyy')}</td>
                      {task.completedAt!==null?<td>{format(new Date(task.completedAt),'dd-MM-yyyy')}</td>:<td>NA</td>}
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
