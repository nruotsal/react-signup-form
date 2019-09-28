import React from 'react'

import ParticipantForm from '../../Common/ParticipantForm/ParticipantForm'
import { FormContainer, CancelButton, SaveButton } from './EditRowStyles'
import { EditRowProps } from './EditRowTypes'

const EditRow: React.FC<EditRowProps> = ({
  participant: { id, name, email, phone },
  saveParticipant,
  cancelEdit
}) => (
  <FormContainer>
    <ParticipantForm
      key={id}
      initialValues={{ name: name, email: email, phone: phone }}
      onSubmit={saveParticipant(id)}
    >
      <CancelButton onClick={cancelEdit(id)}>Cancel</CancelButton>
      <SaveButton type='submit'>Save</SaveButton>
    </ParticipantForm>
  </FormContainer>
)

export default EditRow
