import { Formik } from "formik";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Typography from "@mui/material/Typography";

const PersonalInformation = () => {
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
                  >
                    Next
                  </Button>
                </CardActions>
              </Card>
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
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{ marginTop: 20 }}
                  >
                    Prev
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{ marginTop: 20, marginLeft: 5 }}
                  >
                    Next
                  </Button>
                </CardActions>
              </Card>
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
                    variant="contained"
                    color="secondary"
                    type="submit"
                    style={{ marginTop: 20 }}
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
            </>
          )}
        </Formik>
      </header>
    </div>
  );
};

export default PersonalInformation;
