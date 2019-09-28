import React from 'react'
import { Formik } from 'formik'

import { validateName, validateEmail, validatePhone } from '../../services/validator'
import { AddParticipantFormProps } from './AddParticipantFormTypes'
import {
  FormContainer,
  AddForm,
  NameFormField,
  EmailFormField,
  PhoneFormField,
  AddButton
} from './AddParticipantFormStyles'

const AddParticipantForm: React.FC<AddParticipantFormProps> = ({
  addParticipant
}) => (
  <FormContainer>
    <Formik
      initialValues={{ name: '', email: '', phone: '' }}
      onSubmit={addParticipant}
    >
      {({errors, touched}) => (
        <AddForm>
          <NameFormField
            type="text"
            name="name"
            placeholder="Full name"
            validate={validateName}
            error={errors.name && touched.name}
          />

          <EmailFormField
            type="email"
            name="email"
            placeholder="E-mail address"
            validate={validateEmail}
            error={errors.email && touched.email}
          />

          <PhoneFormField
            type="phone"
            name="phone"
            placeholder="Phone number"
            validate={validatePhone}
            error={errors.phone && touched.phone}
          />

          <AddButton type="submit">Add new</AddButton>
        </AddForm>
      )}
    </Formik>
  </FormContainer>
)

export default AddParticipantForm
