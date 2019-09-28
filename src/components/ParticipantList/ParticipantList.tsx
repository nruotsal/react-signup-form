import React from 'react'

import HeaderRow from './HeaderRow/HeaderRow'
import ParticipantRow from './ParticipantRow/ParticipantRow'
import EditRow from './EditRow/EditRow'
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
    <HeaderRow
      sortedBy={sortedBy}
      sortParticipants={sortParticipants}
    />
    {
      participants.map(participant => (
        participant.isEditing
          ? <EditRow
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
