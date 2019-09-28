import React from 'react'

import { FormContainer, AddButton } from './AddParticipantFormStyles'

import { AddParticipantFormProps } from './AddParticipantFormTypes'
import ParticipantForm from '../Common/ParticipantForm/ParticipantForm'

const AddParticipantForm: React.FC<AddParticipantFormProps> = ({
  addParticipant
}) => (
  <FormContainer>
    <ParticipantForm
      initialValues={{ name: '', email: '', phone: '' }}
      onSubmit={addParticipant}
    >
      <AddButton type='submit'>Add new</AddButton>
    </ParticipantForm>
  </FormContainer>
)

export default AddParticipantForm
