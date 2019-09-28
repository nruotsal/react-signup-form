import React from 'react'
import { Formik } from 'formik'

import {
  validateName,
  validateEmail,
  validatePhone
} from '../../../services/validator'

import {
  FormContainer,
  NameFormField,
  EmailFormField,
  PhoneFormField
} from './ParticipantFormStyles'

import { ParticipantFormProps } from './ParticipantFormTypes'

const ParticipantForm: React.FC<ParticipantFormProps> = ({
  initialValues,
  onSubmit,
  children
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <FormContainer>
        <NameFormField
          type='text'
          name='name'
          placeholder='Full name'
          validate={validateName}
          error={errors.name && touched.name}
        />

        <EmailFormField
          type='email'
          name='email'
          placeholder='E-mail address'
          validate={validateEmail}
          error={errors.email && touched.email}
        />

        <PhoneFormField
          type='phone'
          name='phone'
          placeholder='Phone number'
          validate={validatePhone}
          error={errors.phone && touched.phone}
        />

        {children}
      </FormContainer>
    )}
  </Formik>
)

export default ParticipantForm
