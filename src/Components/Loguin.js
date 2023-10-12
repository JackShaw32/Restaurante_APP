import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import fondo from "../img/bg.svg";
import usuario from "../img/avatar.svg";
import "../css/style.css";

const Loguin = () => {
  const inputs = document.querySelectorAll(".input");
  const [users, setUsers] = useState({
    user: '',
    password: ''
  })
  //Desestructuring
  const {user, password} = users
  
  function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!user.trim() || !password.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Complete todos los campos',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }

    Swal.fire({
      title: 'Perfecto!',
      text: 'Datos Correctos',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  };

  const handleChange = (e) =>{
      setUsers({...users, [e.target.name]: e.target.value})
    }
  
  return (
    <>
      <div className="container-css">
        <div className="img">
          <img src={fondo} alt="img fondo" />
        </div>
        <div className="login-content">
          <form
            onSubmit={handleSubmit}
          >
            <img src={usuario} alt="avatar user" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" 
                className="input" 
                name="user" 
                onChange={handleChange} 
                value={user}/>
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input type="password" 
                className="input" 
                name="password" 
                onChange={handleChange}
                value={password}/>
              </div>
            </div>
            <a href="##">Forgot Password?</a>
            <input type="submit" className="btn-css" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Loguin;
