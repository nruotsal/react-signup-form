import React from 'react'

import {
  HeaderRowContainer,
  NameColumnTitle,
  EmailColumnTitle,
  PhoneColumnTitle,
  DownIcon
} from './HeaderRowStyles'
import { HeaderRowProps } from './HeaderRowTypes'
import { Column } from '../../AppTypes'

export const HeaderRow: React.FC<HeaderRowProps> = ({
  sortedBy,
  sortParticipants
}) => (
  <HeaderRowContainer>
    <NameColumnTitle
      sorted={sortedBy === Column.name}
      onClick={sortParticipants(Column.name)}
    >
      Name
      {sortedBy === Column.name && <DownIcon />}
    </NameColumnTitle>

    <EmailColumnTitle
      sorted={sortedBy === Column.email}
      onClick={sortParticipants(Column.email)}
    >
      E-mail address
      {sortedBy === Column.email && <DownIcon />}
    </EmailColumnTitle>

    <PhoneColumnTitle
      sorted={sortedBy === Column.phone}
      onClick={sortParticipants(Column.phone)}
    >
      Phone number
      {sortedBy === Column.phone && <DownIcon />}
    </PhoneColumnTitle>
  </HeaderRowContainer>
)

export default HeaderRow
