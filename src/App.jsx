import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import UserForm from './Components/UserForm'
import UserList from './Components/UserList'

function App() {

  const[users,setUsers]=useState([]) 
  const [userSelected,setUserSelected]=useState(null)


  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res =>setUsers(res.data))
  },[])



    const getUsers=()=>{
      axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res =>setUsers(res.data))
    }

    const selectUser=(user)=>{
      // alert(user.email)
      setUserSelected(user)
      
    }


const deselectUser=()=>{setUserSelected(null)}


    console.log(userSelected);

  
  

  return (
    <div className="App">

           
     
      <UserForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser}/>
      <UserList users={users} selectUser={selectUser} getUsers={getUsers}/>
      
    </div>
  )
}

export default App
