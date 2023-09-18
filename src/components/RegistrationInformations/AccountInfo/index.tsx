import React from 'react';
import { Input, Form as MultiForm } from "antd";
import { Field, FieldProps } from 'formik';


const AccountInfo: React.FC = ()=> {
  return(
    <>
      <Field name='userName'>
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='Username'
            labelCol={{ span:20 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input {...field} />
          </MultiForm.Item>
        )}
      </Field>

      <Field name='password'>
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='Password'
            labelCol={{ span:20 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input.Password {...field} />
          </MultiForm.Item>
        )}
      </Field>
    </>
  )
}

export default AccountInfo