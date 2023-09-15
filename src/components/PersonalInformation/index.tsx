import { Formik } from 'formik';
import { TextField, Button, Card, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
// import * as yup from 'yup';

const PersonalInformation = () => {
  const [step, setStep] = useState<number>(1);
  const handleNext = () => {
    if(step === 1 || step === 2) {
      setStep((prevStep) => prevStep+1);
    }
    return
  }

  const handlePrev = () => {
    if(step === 2 || step === 3) {
      setStep((prevStep) => prevStep-1)
    }
    return
  }

  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={{
            fullname: '',
            email: '',
            dateOfBirth: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            username: '',
          }}
          onSubmit={(values) => {
            alert('Registration success' + JSON.stringify(values, null, 2));
          }}
        >
          {(formik) => (
            <>
              <form onSubmit={formik.handleSubmit}>
                {step === 1 && (                  
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent className='card'>
                      <Typography
                        sx={{ fontSize: 18 }}
                        color="text.primary"
                        gutterBottom
                      >
                        Personal Information
                      </Typography>
                        <TextField
                          fullWidth
                          id="fullname"
                          name="fullname"
                          label="Full name"
                          value={formik.values.fullname}
                          onChange={formik.handleChange}
                          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                          helperText={formik.touched.fullname && formik.errors.fullname}
                        />
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          label="Email Address"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                          fullWidth
                          id="date"
                          name="dateOfBirth"
                          label="Date of birth"
                          value={formik.values.dateOfBirth}
                          onChange={formik.handleChange}
                          error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                          helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                        />
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: 20 }}
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    </CardActions>
                  </Card>
                )}
                {step === 2 && (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent className='card'>
                      <Typography
                        sx={{ fontSize: 18 }}
                        color="text.primary"
                        gutterBottom
                      >
                        Address Information
                      </Typography>        
                        <TextField
                          fullWidth
                          id="street"
                          name="street"
                          label="Street address"
                          value={formik.values.street}
                          onChange={formik.handleChange}
                          error={formik.touched.street && Boolean(formik.errors.street)}
                          helperText={formik.touched.street && formik.errors.street}
                        />
                        <TextField
                          fullWidth
                          id="city"
                          name="city"
                          label="City"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          error={formik.touched.city && Boolean(formik.errors.city)}
                          helperText={formik.touched.city && formik.errors.city}
                        />
                        <TextField
                          fullWidth
                          id="state"
                          name="state"
                          label="State"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          error={formik.touched.state && Boolean(formik.errors.state)}
                          helperText={formik.touched.state && formik.errors.state}
                        />
                        <TextField
                          fullWidth
                          id="zip"
                          name="zipCode"
                          label="Zip code"
                          value={formik.values.zipCode}
                          onChange={formik.handleChange}
                          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                          helperText={formik.touched.zipCode && formik.errors.zipCode}
                        />
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{ marginTop: 20 }}
                        onClick={handlePrev}
                      >
                        Prev
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: 20, marginLeft: 5 }}
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    </CardActions>
                  </Card>
                )}
                {step === 3 && (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent className='card'>
                      <Typography
                        sx={{ fontSize: 18 }}
                        color="text.primary"
                        gutterBottom
                      >
                        Account Information
                      </Typography>
                        <TextField
                          fullWidth
                          id="username"
                          name="username"
                          label="Username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          error={formik.touched.username && Boolean(formik.errors.username)}
                          helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField
                          fullWidth
                          id="password"
                          name="password"
                          label="Password"
                          type="password"
                        />
                        <TextField
                          fullWidth
                          id="passwordConf"
                          name="passwordConf"
                          label="Password confirmation"
                          type="password"
                        />
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{ marginTop: 20 }}
                        onClick={handlePrev}
                      >
                        Prev
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ marginTop: 20, marginLeft: 5 }}
                      >
                        Submit
                      </Button>
                    </CardActions>
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
