import { Formik, FormikProps, useFormik, ErrorMessage} from 'formik';
// import { TextField, Button, Card, CardContent, CardActions } from '@mui/material';
import { Input, Button, Card, DatePicker } from 'antd'
// import Typography from '@mui/material/Typography';
import { useState } from 'react';
import * as yup from 'yup';

interface Personal {
  fullname: string;
  email: string;
  birthdate: string,
  street: string,
  city: string,
  state: string,
  zipCode: string,
  username: string,
  password: string,
}

const initPersonal = {
  fullname: '',
  email: '',
  birthdate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  username: '',
  password: '',
}

// interface AddressFormProps {
//   onFinish: (values: AddressFormData) => void;
//   initialValues: AddressFormData;
// }

// interface AddressFormData {
//   streetAddress: string;
//   city: string;
//   state: string;
//   zipCode: string;
// }

const validationPersonal = yup.object().shape({
  fullname: yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Please input your Full Name!'),
  email: yup.string()
      .email('Invalid email format')
      .required('Please input your Email!'),
  birthdate: yup.string().required('Please input your Date of Birth!'),
  street: yup.string().required("Please enter your street address"),
  city: yup.string().required("Please enter your city"),
  state: yup.string().required("Please enter your state"),
  zipCode: yup.number()
    .required("Please enter your zip code")
    .min(5, "Zip code must be a valid 5-digit code")
    .max(5, "Zip code must be a valid 5-digit code"),
  username: yup.string().required("Please enter your username"),
  password: yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Use at least 8 characters, one uppercase letter, one lowercase letter, and one number"),
})

const PersonalInformation = () => {
  const [step, setStep] = useState<number>(1);

  const initialValues = {
    fullname: '',
    email: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    username: '',
  };

  const handleNext = (formik: FormikProps<typeof initialValues>) => {
    if ((step === 1 || step === 2) && formik.isValid) {
      setStep((prevStep) => prevStep + 1);
    }
    return
  };

  const handlePrev = (formik: FormikProps<typeof initialValues>) => {
    if ((step === 2 || step === 3) && formik.isValid) {
      setStep((prevStep) => prevStep - 1);
    }
    return
  };

  const submitPersonal = (values: Personal) => {
    console.log(values)
  }

  const formMik = useFormik({
      initialValues: initPersonal,
      onSubmit: submitPersonal,
      validationSchema: validationPersonal
  })

  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={initialValues}
          validationSchema={validationPersonal} 
          onSubmit={(values) => {
            alert('Registration success' + JSON.stringify(values, null, 2));
          }}
        >
          {(formik) => (
            <>
              <form onSubmit={formik.handleSubmit}>
                {step === 1 && (                  
                  <Card title="Personal Information" style={{ width: 300, display: 'flex', flexDirection: 'column', gap:'1px'}}>
                    <div className="form-group">
                      <p>Full Name : </p>
                      <Input name={'fullname'}
                        value={formMik.values.fullname}
                        onChange={formMik.handleChange('fullname')}
                        status={formMik.errors.fullname && 'error'}
                      />
                      {formMik.errors.fullname && (
                        <p className={'error-message'}>{formMik.errors.fullname}</p>
                      )}
                    </div>
                    <div>
                      <p>Email Address : </p>
                      <Input name={'email'}
                        value={formMik.values.email}
                        onChange={formMik.handleChange('email')}
                        status={formMik.errors.email && 'error'}
                      />
                      {formMik.errors.email && (
                        <p className={'error-message'}>{formMik.errors.email}</p>
                      )}
                    </div>
                    <div>
                      <p>Date of Birth : </p>
                      <DatePicker name={'birthdate'}
                        style={{ width: 250 }}
                        onBlur={formMik.handleChange('birthdate')}
                        status={formMik.errors.birthdate && 'error'}
                      />
                        {formMik.errors.birthdate && (
                          <p className={'error-message'}>{formMik.errors.birthdate}</p>
                      )}
                    </div>
                    <Button
                      danger
                      type="primary"
                      style={{ marginTop: 20 }}
                      onClick={() => {handleNext(formik)}}
                      >
                      Next
                    </Button>
                  </Card>
                )}
                {step === 2 && (
                  <Card title="Address Information" style={{ width: 300, display: 'flex', flexDirection: 'column', gap:'1px'}}>
                    <div className="form-group">
                      <label htmlFor="street">
                        <span className="star">*</span> Street Address
                      </label>
                      <Input
                        type="text"
                        name="street"
                        id="street"
                        className="form-control"
                        value={formMik.values.street}
                        onChange={formMik.handleChange('street')}
                        status={formMik.errors.street && 'error'}
                      />
                      <ErrorMessage
                        name="street"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="city">
                        <span className="star">*</span> City
                      </label>
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        className="form-control"
                        value={formMik.values.city}
                        onChange={formMik.handleChange('city')}
                        status={formMik.errors.city && 'error'}
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="state">
                        <span className="star">*</span> State
                      </label>
                      <Input
                        type="text"
                        name="state"
                        id="state"
                        className="form-control"
                        value={formMik.values.state}
                        onChange={formMik.handleChange('state')}
                        status={formMik.errors.state && 'error'}
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="zipCode">
                        <span className="star">*</span> Zip Code
                      </label>
                      <Input
                        type="number"
                        name="zipCode"
                        id="zipCode"
                        className="form-control"
                        value={formMik.values.zipCode}
                        onChange={formMik.handleChange('zipCode')}
                        status={formMik.errors.zipCode && 'error'}
                      />
                      <ErrorMessage
                        name="zipCode"
                        component="div"
                        className="error-message"
                      />
                    </div>
                      <Button
                        danger
                        type='default'
                        style={{ marginTop: 20 }}
                        onClick={() =>handlePrev(formik)}
                      >
                        Prev
                      </Button>
                    <Button
                      danger
                      type='primary'
                      style={{ marginTop: 20 }}
                      onClick={()=>handleNext(formik)}                        
                    >
                      Next
                    </Button>               
                  </Card>
                )}
                {step === 3 && (
                  <Card title="Account Information" style={{ width: 300, display: 'flex', flexDirection: 'column', gap:'1px'}}>
                    <div>
                      <p>Username : </p>
                      <Input name={'username'}
                          value={formMik.values.username}
                          onChange={formMik.handleChange('username')}
                          status={formMik.errors.username && 'error'}
                      />
                        {formMik.errors.username && (
                            <p className={'error-message'}>{formMik.errors.username}</p>
                        )}
                    </div>
                    <div>
                      <p>Password : </p>
                      <Input.Password name={'password'}
                          value={formMik.values.password}
                          onChange={formMik.handleChange('password')}
                          status={formMik.errors.password && 'error'}
                      />
                          {formMik.errors.password && (
                          <p className={'error-message'}>{formMik.errors.password}</p>
                      )}
                  </div>            
                    <Button
                        danger
                        type='default'
                        style={{ marginTop: 20 }}
                        onClick={() =>handlePrev(formik)}
                      >
                        Prev
                      </Button>
                      <Button
                      type='primary'
                      htmlType='submit'
                      style={{ marginTop: 20 }}                        
                      >
                        Submit
                    </Button> 
                  </Card>
                )}
              </form>
            </>
          )}
        </Formik>
      </header>
    </div>
  );
};


export default PersonalInformation;