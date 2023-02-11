import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Registar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 


const initialValues = {
    name: "",
  email: '',
  password: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name must be at least 2 characters long')
    .max(100, "Name can be maximum 100 characters long")
    .required('Name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

const handleSubmit = (values, { setSubmitting}) => {
  // Save the user's information to local storage
  localStorage.setItem('name', values.name);
  localStorage.setItem('email', values.email);
  localStorage.setItem('password', values.password);

  // Notify the user that their account has been created
//   alert('Your account has been created!');
  toast.success('Your account has been created!', {
    position: toast.POSITION.TOP_CENTER,
    className: 'toast-message',



});


  setSubmitting(false);
   window.location = '/quiz';

};

const Registar = () => (
<div>

  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      
                <div class="form-container">
                <div class="form-wrapper">
        
      <Form>
      <div className="form-control">
          <h2><span className='highlight'>My</span>Quiz</h2>
          <p>Online Quiz Management System</p>

        <Field type="name" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" className='error' />

    </div>

    <div className="form-control">

    <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" className='error' />
        </div>

    <div className="form-control">

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" className='error' />
        </div>
        <div className="register">

        <button className='submit' type="submit" disabled={isSubmitting}>
          Register <ToastContainer/>
        </button>
        </div>
      </Form>
      </div>

      </div>



    )}
  </Formik>
  </div>

);

    

export default Registar;

