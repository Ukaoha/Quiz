import { useState } from 'react';
import { Formik, Form, Field , ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [error, setError] = useState('');

  const handleSubmit = (values) => {

    // Check if the email and password match the information stored in local storage
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    
        // Check if the email exists in local storage

    const emailexits = values.email 
    if (!emailexits) {
      setError('This email has not been registered');
      return;
    }


    if (values.email !== email || values.password !== password) {
      setError('Invalid email or password');
    } else {
      // Notify the user that they have logged in successfully
      toast.success('Your have logged in successfully!', {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message'
    
    
    });
    
      // Redirect to another page.
      window.location = '/Quiz/quiz';
    }
  };

  return (
    <div className='login'>
      <ToastContainer/>
            <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className="form-container">
        <div className="form-wrapper">

        <Form>
        <div className="form-control">
          <h2><span className='highlight'>My</span>Quiz</h2>
          <p>Online Quiz Management System</p>

          <Field type="email" name="email" placeholder="Email" />
          <small>{error}</small>

          </div>
          <div className="form-control">

          <Field type="password" name="password" placeholder="Password" />
          <small>{error}</small>


          </div>
          <div className="register">

          <button className='submit' type="submit"> Log in </button>
          </div>
          </Form>
          </div>
          </div>
    )}
  </Formik>
  </div>
  

);

      }
export default Login;
