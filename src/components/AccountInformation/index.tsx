import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core"

const AccountInformation = () => {
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

                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        style={{marginTop: 20}}
                    >
                        Prev  
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{marginTop: 20, marginLeft: 5}}
                    >
                        Submit  
                    </Button>                  
                    
                    </form>
                )}
                </Formik>
            </header>
        </div>
      )
    }

export default AccountInformation