import React from 'react';
import { Input, Form as MultiForm } from "antd";
import { Field, FieldProps } from 'formik';


const AddresslInfo: React.FC = ()=> {
  return(
    <>
      <Field name="street">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='Street'
            labelCol={{ span:8 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input {...field} />
          </MultiForm.Item>
        )}
      </Field>

      <Field name='state'>
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='State'
            labelCol={{ span:8 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input {...field} />
          </MultiForm.Item>
        )}
      </Field>

      <Field name='city'>
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='City'
            labelCol={{ span:8 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input {...field} />
          </MultiForm.Item>
        )}
      </Field>

      <Field name='zipCode'>
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label='Zip code'
            labelCol={{ span:8 }}
            validateStatus={meta.touched && meta.error ? 'error' : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
            >
              <Input {...field} />
          </MultiForm.Item>
        )}
      </Field>
    </>
  )
}

export default AddresslInfo