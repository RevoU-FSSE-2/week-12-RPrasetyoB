import { PersonalInfo, AddressInfo, AccountInfo } from '../RegistrationInformations'
import React, { useState, useEffect } from 'react';
import { personalInfoValidation, addressInfoValidation, accountInfoValidation } from '../validation';
import "../../App.css";
import { Formik, Form } from 'formik';
import { Button, Steps, Card, Divider, Result } from 'antd';
import dayjs from 'dayjs';

const RegistrationForm : React.FC = ()=> {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues = {
        fullName: 'rpb',
        email: 'rpb@revou.com',
        birthdate: '',
        street: 'manggis',
        city: 'surabaya',
        state: 'indonesia',
        zipCode: '14053',
        username: '',
        password: '',
    };


const validationSchema = [
    personalInfoValidation,
    addressInfoValidation,
    accountInfoValidation,
];

const stepItems = [
    { title: 'Personal' },
    { title: 'Address' },
    { title: 'Account' },
]

const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

useEffect(()=> {
    const handleResize = ()=> {
        setIsMobile(window.innerWidth <= 425)
    }

    window.addEventListener('resize', handleResize);
    return () => {
        window.addEventListener('resize', handleResize)
    }
}, []);

    return(
    <div className='form-container'>
        <Card title = 'Registration form' className='regis-card'>
            <div className='form-items'>
                {!isSubmitted && (
                    <>
                        <div className= 'step-container'>
                          <Steps
                            direction='horizontal'
                            size='small'
                            current={currentStep}
                            className='step-style'>
                                {stepItems.map((item, index)=> (
                                    <Steps.Step
                                        key={index}
                                        title={isMobile ? '' : item.title}/>
                                ))}
                          </Steps>
                        </div>
                        <Divider type='horizontal' className='divider-style'/>
                    </>
                )}
                <div className='form-content'>
                    {isSubmitted ? (
                        <Result
                            className='result-style'
                            status='success'
                            title='Successfully Registered!'
                            subTitle ='Your Registertration has been submitted successfully'
                            />
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema[currentStep]}
                            onSubmit={(values, action)=> {
                                if (currentStep === 2) {
                                    console.log('all data submitted:', values);
                                    action.resetForm();
                                    setIsSubmitted(true);
                                    setTimeout(() => {
                                        setIsSubmitted(false);
                                        setCurrentStep(0)
                                    },1500);
                                } else {
                                    setCurrentStep(currentStep + 1);
                                }                               
                            }}>
                            {({ handleSubmit, isValid, dirty}) => (
                                <Form
                                onSubmit={handleSubmit}>
                                    {currentStep === 0 && <PersonalInfo />}
                                    {currentStep === 1 && <AddressInfo />}
                                    {currentStep === 2 && <AccountInfo />}
                                    <div className='btn-container'>
                                        {currentStep > 0 &&(
                                            <Button
                                                danger
                                                type='default'
                                                className='prev-btn'
                                                onClick={() => setCurrentStep(currentStep - 1)}>
                                                    Prev
                                            </Button>
                                        )}

                                        {currentStep < 2 && (
                                            <Button
                                                danger
                                                type='primary'
                                                onClick={() => {
                                                    if (isValid && dirty) {
                                                        setCurrentStep(currentStep + 1)  
                                                    }
                                                }}
                                            >
                                                Next
                                            </Button>
                                        )}

                                        {currentStep === 2 && (
                                            <Button
                                                type='primary'
                                                htmlType='submit'
                                            >
                                                Submit
                                            </Button>
                                        )}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}

                </div>
            </div>
        </Card>
    </div>
    )
};

export default RegistrationForm