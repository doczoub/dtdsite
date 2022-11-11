import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import NavBar from './NavBar'
import { useFormik } from 'formik';

const Profile = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const auth= useAuth()
const navigate = useNavigate()

  const handleLogOut= ()=>{
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      <NavBar />
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>

     <div>Welcome {auth.user}</div>  
      <button onClick={handleLogOut}>logOut</button>
    </div>
  )
}



export default Profile