import { Participant, Column } from '../AppTypes'
import { SortParticipantsFunction } from './HeaderRow/HeaderRowTypes'
import { EditParticipantFunction, DeleteParticipantFunction } from './ParticipantRow/ParticipantRowTypes'
import { SaveParticipantFunction, CancelEditFunction } from './EditRow/EditRowTypes'

export type ParticipantListProps = {
  participants: Participant[]
  editParticipant: EditParticipantFunction
  saveParticipant: SaveParticipantFunction
  cancelEdit: CancelEditFunction
  deleteParticipant: DeleteParticipantFunction
  sortParticipants: SortParticipantsFunction
  sortedBy: Column
}
