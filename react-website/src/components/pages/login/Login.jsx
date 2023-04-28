import React, { useState } from 'react'
import login from '../login/login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function clearForm() {
    document.querySelector('#login-form').reset();
    setUsername('');
    setPassword('');
  }

  function validate() {
    let check = true;
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length -1; i ++){
      if(inputs[i].value.replace(/\s+/g, '') === ''){
        check = false;
        inputs[i].style.borderBottom = '2px solid red';
      } else {
        inputs[i].style.borderBottom = '#5a5a5a 2px solid';
      }
    }
    return check;
  }

  async function submitHendel(e) {
    e.preventDefault();
    console.log(username, password)
    if(!validate()){
      console.error("Error submitting")
      return
    }
    // fetch post jwt
    clearForm()
  }
  
  return (
    <div className="login-container">
      <div className='divForm'>
        <h1>login form</h1>
        <form className='loginForm' id='login-form'>
          <input type='text' className='username' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}/>
          <input type='password' className='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
          <input type='submit' className='submit' value='כניסה' onClick={(e)=>{submitHendel(e)}} />
        </form>
      </div>
      <div>
        <h2>login section2</h2>
      </div>
    </div>
  )
}

export default Login