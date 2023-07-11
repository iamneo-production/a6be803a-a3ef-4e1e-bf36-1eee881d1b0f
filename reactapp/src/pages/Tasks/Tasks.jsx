import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import '../DashboardStyle/Style.css'
import '../../App.css'
import { NavLink } from 'react-router-dom';

const Tasks = () => {
  const [tasks,setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const options=['All','even','true','false','odd'];
  const dropDownRef= useRef('All');

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

  return (
    <div className='container'>
      <div className='title'>TASKS</div>
      <div className='search'>
        <SearchBar search={searchItem} options={options} refer={dropDownRef} onChange={onOptionSelect}/>
        <NavLink to={"./createTask"} className="nav-link"><button className='create-button'>Create Task</button></NavLink>
      </div>
      <hr/>
      <table className='my-table'>
        <tr>
          <th>userId</th>
          <th>Id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
          {filteredTasks.map(task=><tr>
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