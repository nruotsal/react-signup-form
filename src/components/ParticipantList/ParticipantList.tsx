import React from 'react'

import ParticipantHeaderRow from './ParticipantHeaderRow'
import ParticipantRow from './ParticipantRow'
import ParticipantRowEdit from './ParticipantRowEdit'
import { ListContainer } from './ParticipantListStyles'
import { ParticipantListProps } from './ParticipantListTypes'

const ParticipantList: React.FC<ParticipantListProps> = ({
  participants,
  sortedBy,
  sortParticipants,
  editParticipant,
  saveParticipant,
  cancelEdit,
  deleteParticipant
}) => (
  <ListContainer>
    <ParticipantHeaderRow
      sortedBy={sortedBy}
      sortParticipants={sortParticipants}
    />
    {
      participants.map(participant => (
        participant.isEditing
          ? <ParticipantRowEdit
            participant={participant}
            saveParticipant={saveParticipant}
            cancelEdit={cancelEdit}
          />
          : <ParticipantRow
            participant={participant}
            editParticipant={editParticipant}
            deleteParticipant={deleteParticipant}
          />
      ))
    }
  </ListContainer>
)

export default ParticipantList
