import React from 'react';
import ParticipantHeaderRow from './ParticipantHeaderRow';
import ParticipantRow from './ParticipantRow';
import { ListContainer } from './ParticipantListStyles'
import { ParticipantListProps } from './ParticipantListTypes'

const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => (
  <ListContainer>
    <ParticipantHeaderRow />
    {
      participants.map(participant => (
        <ParticipantRow participant={participant} />
      ))
    }
  </ListContainer>
)

export default ParticipantList
