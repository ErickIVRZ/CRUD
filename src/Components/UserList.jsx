import axios from "axios"
import '../assets/listUser.css'

const UserList=({users,selectUser,getUsers})=>{

  const deleteUser=(id)=>{
    
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>getUsers())
  }


  return(
    <div>

      

      <ul>
      <h2>Usuarios Registrados</h2>
        {
          
          users.map(user=>(
            <li key={user.id}>
              
              <div><b>Email:</b>{user.email}</div>
              <div><b>Password:</b>{user.password}</div>
              <div><b>FirstName:</b>{user.first_name}</div>
              <div><b>LastName:</b>{user.last_name}</div>
              <div><b>Birthday:</b>{user.birthday}</div>
              <button className="button1"  onClick={()=>selectUser(user)}>Update</button>
              <button className="button1" onClick={()=>deleteUser(user.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      

    </div>
  )
}

export default UserList;