import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core"

const AddressInformation = () => {
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
                        id="street"
                        name="street"
                        label="Street address"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        id="city"
                        name="city"
                        label="City"
                    />
                    <TextField
                        fullWidth
                        id="state"
                        name="state"
                        label="State"
                    />
                    <TextField
                        fullWidth
                        id="zip"
                        name="zip"
                        label="Zip code"
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
                        color="secondary"
                        type="submit"
                        style={{marginTop: 20, marginLeft: 5}}
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

export default AddressInformation