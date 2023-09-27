import { Formik, Form, Field, ErrorMessage  } from "formik";
import { object, string} from 'yup';

const scheme = object().shape({
    login: string().required(),
    password: string().min(6).max(32).required(),
})

const initialsValue = {
    login: '',
    password: ''
}

export const LoginForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };

const handleSubmit = (values, {resetForm}) =>{
    console.log(values)
    resetForm()

}
  return (
    <Formik initialValues={initialsValue} validationSchema={scheme}
    onSubmit={handleSubmit}
    >
    <Form autoComplete="off">
      <label htmlFor="">
        Login
        <Field name="login" type="text" />
        <ErrorMessage name='login'/>
      </label>
      <label htmlFor="">
        Password
        <Field name="password" type="text" />
        <ErrorMessage name="password" />
      </label>
      <button type="submit">Submit</button>
    </Form></Formik>
  );
};
