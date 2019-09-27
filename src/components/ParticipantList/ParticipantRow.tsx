import React from 'react'

import { ParticipantRowProps } from './ParticipantListTypes';
import {
  ParticipantRowContainer,
  ColumnValue,
  EditIcon,
  DeleteIcon
} from './ParticipantListStyles'

export const ParticipantRow: React.FC<ParticipantRowProps> = ({
  participant: { id, name, email, phone },
  deleteParticipant
}) => (
  <ParticipantRowContainer key={id}>
    <ColumnValue width="164px">{name}</ColumnValue>
    <ColumnValue width="275px">{email}</ColumnValue>
    <ColumnValue width="194px">{phone}</ColumnValue>
    <EditIcon />
    <DeleteIcon onClick={() => deleteParticipant(id)}/>
  </ParticipantRowContainer>
)

export default ParticipantRow
