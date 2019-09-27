import React from 'react'

import { ParticipantRowProps } from './ParticipantListTypes';
import {
  ParticipantRowContainer,
  ColumnValue,
  EditIcon,
  DeleteIcon
} from './ParticipantListStyles'

export const ParticipantRow: React.FC<ParticipantRowProps> = ({ participant }) => (
  <ParticipantRowContainer key={participant.id}>
    <ColumnValue width="164px">{participant.name}</ColumnValue>
    <ColumnValue width="275px">{participant.email}</ColumnValue>
    <ColumnValue width="194px">{participant.phone}</ColumnValue>
    <EditIcon />
    <DeleteIcon />
  </ParticipantRowContainer>
)

export default ParticipantRow
