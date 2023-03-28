import React, { useState } from 'react'
import '../App.css'

const Metalock = (props) => <a href='#' id='metalockIcon'></a> // Need to style this

const FormInput = (props) => (
  <div className='row'>
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
)

const FormButton = (props) => (
  <div id='button' className='row'>
    <button>{props.title}</button>
  </div>
)

const Microsoft = (props) => <a href='#' id='microsoftIcon'></a> // Need to style this

const Google = (props) => <a href='#' id='googleIcon'></a> // Need to style this

const SSOLogin = (props) => (
  <div id='alternativeLogin'>
    <label>Or sign in with:</label>
    <div id='iconGroup'>
      <Microsoft />
      <Google />
    </div>
  </div>
)

const Copyright = (props) => (
  <div>
    {'Copyright © '}
    <a href='https://www.metalockengineering.com/sv/metalock-engineering-swe/'>Metalock Machines</a>
    {' ' + new Date().getFullYear() + '.'}
  </div>
)
function Login() {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  return (
    <div id='loginform'>
      <Metalock />
      <FormInput description='Username' placeholder='Type your username' type='text' />
      <FormInput description='Password' placeholder='Type your password' type='password' />
      <FormButton title='Log in' />
      <SSOLogin />
      <Copyright />
    </div>
  )
}

export default Login
