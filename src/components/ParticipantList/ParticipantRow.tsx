import React from 'react'

import { ParticipantRowProps } from './ParticipantListTypes'
import {
  ParticipantRowContainer,
  NameColumnValue,
  EmailColumnValue,
  PhoneColumnValue,
  EditIcon,
  DeleteIcon
} from './ParticipantListStyles'

export const ParticipantRow: React.FC<ParticipantRowProps> = ({
  participant: { id, name, email, phone },
  editParticipant,
  deleteParticipant
}) => (
  <ParticipantRowContainer key={id}>
    <NameColumnValue>{name}</NameColumnValue>
    <EmailColumnValue>{email}</EmailColumnValue>
    <PhoneColumnValue>{phone}</PhoneColumnValue>
    <EditIcon onClick={editParticipant(id)} />
    <DeleteIcon onClick={deleteParticipant(id)} />
  </ParticipantRowContainer>
)

export default ParticipantRow
