import React from 'react';
import { HeaderRow, ColumnTitle } from './ParticipantListStyles'

export const ParticipantHeaderRow: React.FC = () => (
  <HeaderRow>
    <ColumnTitle width="164px">Name</ColumnTitle>
    <ColumnTitle width="275px">E-mail address</ColumnTitle>
    <ColumnTitle width="194px">Phone number</ColumnTitle>
  </HeaderRow>
)

export default ParticipantHeaderRow
