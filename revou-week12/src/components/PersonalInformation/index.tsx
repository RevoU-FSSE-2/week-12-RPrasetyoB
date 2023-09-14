import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core"

const PersonalInformation = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Formik
                initialValues={{
                    name: '',
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2))
                }}
                >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
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

                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        style={{marginTop: 20}}
                    >
                        Next  
                    </Button>                  
                    
                    </form>
                )}
                </Formik>
            </header>
        </div>
      )
    }

export default PersonalInformation