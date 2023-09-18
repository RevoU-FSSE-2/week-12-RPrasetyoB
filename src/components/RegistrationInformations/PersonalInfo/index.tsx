import React from 'react';
import { Input, Form as MultiForm } from "antd";
import { Field, FieldProps } from 'formik';
// import moment from 'moment'

function getTodayDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}


const PersonalInfo: React.FC = ()=> {
  const defaultDate = getTodayDate();
  
  return(
    <>
      <Field name="fullName">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='Full Name'
            labelCol={{ span:20 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input {...field} />
          </MultiForm.Item>
        )}
      </Field>

      <Field name='email'>
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='Email address'
            labelCol={{ span:20 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input {...field} />
          </MultiForm.Item>
        )}
      </Field>

      <Field name='birthdate'>
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='Birthdate'
            labelCol={{ span:20 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input type='date' {...field} defaultValue= {defaultDate}/>
          </MultiForm.Item>
        )}
      </Field>
    </>
  )
}

export default PersonalInfo