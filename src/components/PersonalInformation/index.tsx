import { Formik } from "formik";
import { TextField, Button, Card, CardContent, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

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
            name: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(formik) => (
            <>
              {step === 1 && (
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.primary"
                      gutterBottom
                    >
                      Personal Information
                    </Typography>
                    <form onSubmit={formik.handleSubmit} className="AppForm">
                      <TextField
                        fullWidth
                        id="fullName"
                        name="fullName"
                        label="Full name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                      />
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                      />
                      <TextField
                        fullWidth
                        id="date"
                        name="date"
                        label="Date of birth"
                      />
                    </form>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
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
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.primary"
                      gutterBottom
                    >
                      Address Information
                    </Typography>
                    <form onSubmit={formik.handleSubmit} className="AppForm">
                      <TextField
                        fullWidth
                        id="street"
                        name="street"
                        label="Street address"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                      />
                      <TextField fullWidth id="city" name="city" label="City" />
                      <TextField
                        fullWidth
                        id="state"
                        name="state"
                        label="State"
                      />
                      <TextField fullWidth id="zip" name="zip" label="Zip code" />
                    </form>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      color="secondary"
                      type="submit"
                      style={{ marginTop: 20 }}
                      onClick={handlePrev}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
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
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.primary"
                      gutterBottom
                    >
                      Account Information
                    </Typography>
                    <form onSubmit={formik.handleSubmit} className="AppForm">
                      <TextField
                        fullWidth
                        id="username"
                        name="username"
                        label="Username"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
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
                    </form>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      color="secondary"
                      type="submit"
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
            </>
          )}
        </Formik>
      </header>
    </div>
  );
};

export default PersonalInformation;
