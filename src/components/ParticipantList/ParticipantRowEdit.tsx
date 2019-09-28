import React from 'react'
import { Formik } from 'formik'

import { validateName, validateEmail, validatePhone } from '../../services/validator'
import { ParticipantRowEditProps } from './ParticipantListTypes'
import {
  EditParticipantForm,
  NameFormField,
  EmailFormField,
  PhoneFormField,
  CancelButton,
  SaveButton
} from './ParticipantListStyles'

const ParticipantRowEdit: React.FC<ParticipantRowEditProps> = ({
  participant: { id, name, email, phone },
  saveParticipant,
  cancelEdit,
}) => (
  <Formik
    key={id}
    initialValues={{ name: name, email: email, phone: phone }}
    onSubmit={saveParticipant(id)}
  >
    {({errors, touched}) => (
      <EditParticipantForm>
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

        <CancelButton onClick={cancelEdit(id)}>Cancel</CancelButton>
        <SaveButton type="submit">Save</SaveButton>
      </EditParticipantForm>
    )}
  </Formik>
)

export default ParticipantRowEdit
