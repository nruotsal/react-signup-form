import React from 'react'

import {
  HeaderRow,
  NameColumnTitle,
  EmailColumnTitle,
  PhoneColumnTitle,
  DownIcon
} from './ParticipantListStyles'
import { ParticipantHeaderRowProps } from './ParticipantListTypes'
import { Column } from '../AppTypes'

export const ParticipantHeaderRow: React.FC<ParticipantHeaderRowProps> = ({
  sortedBy,
  sortParticipants
}) => (
  <HeaderRow>
    <NameColumnTitle
      sorted={sortedBy === Column.name}
      onClick={sortParticipants(Column.name)}
    >
      Name
      { sortedBy === Column.name && <DownIcon /> }
    </NameColumnTitle>

    <EmailColumnTitle
      sorted={sortedBy === Column.email}
      onClick={sortParticipants(Column.email)}
    >
      E-mail address
      { sortedBy === Column.email && <DownIcon /> }
    </EmailColumnTitle>

    <PhoneColumnTitle
      sorted={sortedBy === Column.phone}
      onClick={sortParticipants(Column.phone)}>
      Phone number
      { sortedBy === Column.phone && <DownIcon /> }
    </PhoneColumnTitle>
  </HeaderRow>
)

export default ParticipantHeaderRow
