import {Formik, Form, Field} from 'formik'
export const MaterialsEditorForm =({onSubmit})=>{
const handleSubmit= async(values, actions) => {
    await onSubmit(values)
    actions.setSubmitting(false)
    actions.resetForm()
   }

 return <Formik initialValues={{title: '', link: ''}}
               onSubmit={handleSubmit}
               >
    {({isSubmitting}) =>{
        return(
        <Form>
        <label >Description: 
            <Field name="title" type="text"/>
            </label>
            <label >Url: 
            <Field name="link" type="text"/>
            </label>
            
      <button type='submit' disabled={isSubmitting}>Add materials</button>
    </Form>
    )}}
 </Formik>
}