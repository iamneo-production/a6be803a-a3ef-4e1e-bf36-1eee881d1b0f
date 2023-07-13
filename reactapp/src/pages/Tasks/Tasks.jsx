import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import '../DashboardStyle/Style.css'
import '../../App.css'
import { NavLink } from 'react-router-dom';

const Tasks = () => {
  const [tasks,setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showActions, setShowActions] = useState(false);

  const options=['All','even','true','false','odd'];
  const dropDownRef= useRef('All');

  useEffect(()=>{
    if(selectedTasks.length>0){
      setShowActions(true);
    }else{
      setShowActions(false);
    }
    console.log(showActions)
  },[selectedTasks])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {setTasks(json);
        setFilteredTasks(json);
      })
  },[])

  const checkSubstring=(str, item)=>{
    return str.includes(item);
  }

  const searchItem = (item) => {
    if(item===""){
      setFilteredTasks(tasks);
    }else{
    const filtered1=tasks.filter((task)=>task.id==item);
    const filtered2=tasks.filter((task)=>checkSubstring(task.title, item));
    setFilteredTasks([...filtered1,...filtered2])
    }
  }

  const onOptionSelect=()=>{
    const curr=dropDownRef.current.value;
    if(curr=='even'){
      setFilteredTasks(tasks.filter((task)=>task.id%2==0));
    }else if(curr=='All'){
      setFilteredTasks(tasks);
    }else if(curr=='true'){
      setFilteredTasks(tasks.filter((task)=>task.completed))
    }else if(curr=='false'){
      setFilteredTasks(tasks.filter((task)=>!task.completed))
    }else{
      setFilteredTasks(tasks.filter((task)=>task.id%2!==0))
    }
  }

  const onCheck=(e)=>{
    const selected = e.target.value;
    if(e.target.checked){
      setSelectedTasks([...selectedTasks,selected]);
    }else{
      setSelectedTasks(selectedTasks.filter((item)=>item !== selected));
    }
  }

  return (
    <div className='container'>
      <div className='title'>TASKS</div>
      <div className='search'>
        <SearchBar search={searchItem} options={options} refer={dropDownRef} onChange={onOptionSelect}/>
        <NavLink to={"./createTask"} className="nav-link"><button className='create-button'>Create Task</button></NavLink>
        </div>
      {showActions?<select className='actions-button' name='actions'>
        <option value="" disabled selected>Actions</option>
        <option>delete</option>
      </select>:<div></div>}
      
      <hr/>
      <table className='my-table'>
        <tr>
          <th></th>
          <th>userId</th>
          <th>Id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
          {filteredTasks.map(task=>
          <tr>
            <td><input type='checkbox' name='checkbox' value={task.id} onChange={onCheck}></input></td>
            <td>{task.userId}</td>
            <td>{task.id}</td>
            <td>{task.title}</td>
            {task.completed?<td>true</td>:<td>false</td>}
          </tr>)}
      </table>
    </div>
  )
}

export default Tasks