import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../assets/style.css'


const UserForm = ({getUsers,userSelected,deselectUser}) => {

const {register,handleSubmit,reset}=useForm()


useEffect(()=>{
  if(userSelected){
      reset(userSelected)
  }

},[userSelected])



const submit=(data)=>{

if(userSelected){
  axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,data)
  .then(()=>getUsers())
}else{

  //*Creando pelicula

  axios.post(`https://users-crud1.herokuapp.com/users/`,data)
  .then(()=>getUsers())
  .catch(err=>console.log(err.response))
  console.log(data);
}
clear()
}
const clear=()=>{
  reset({
    email:"",
    password:"",
    first_name:"",
    last_name:"",
    birthday:""
  })
  deselectUser()

}
 

  return (
    <form onSubmit={handleSubmit(submit)}>


      <div>
        <h1>First CRUD</h1>     
      </div>

      <div className='cls'>
            
      </div>


      <div className='input'>
        <label htmlFor='email'>Email</label>       
        <input className='int-input'
        type="text"
        id="email"
        placeholder='Email'
        {...register("email")}
        />
        
      </div>

      <div className='input'>
        <label htmlFor='password'>Password</label>        
        <input className='int-input'
        type="password"
        id="password"
        placeholder='password'
        {...register("password")}
        />
      
      
        
      </div>

      <div className='input'>
        <label htmlFor='first_name'>first Name</label>
        <input className='int-input'
        type="text"
        id="first_name"
        placeholder='first-name'
        required
        {...register("first_name")}
        />
        
        
      </div>

      <div className='input'>
        <label htmlFor='last_name'>Last Name</label>
        <input className='int-input'
        type="text" 
        id="last_name"
        placeholder='last-name'
        required
        {...register("last_name")}
        />
      </div>

      <div className='input'>
        <label htmlFor='birthday'>Birthday</label>
        <input className='int-input'
        type="date"
        id="birthday"
        {...register("birthday")}
        />
      </div>
      
      <button className='button'>Submit</button>
      <button className='button' onClick={clear} type="button">Clear</button>

    </form>
  );
};

export default UserForm;