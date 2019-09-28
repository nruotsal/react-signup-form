import { Participant, Column } from '../AppTypes'

export type DeleteParticipantFunction = (id: string) => () => void

export type SortParticipantsFunction = (column: Column) => () => void

export interface ParticipantListProps {
  participants: Participant[]
  deleteParticipant: DeleteParticipantFunction
  sortParticipants: SortParticipantsFunction
  sortedBy: Column
}

export interface ParticipantRowProps {
  participant: Participant
  deleteParticipant: DeleteParticipantFunction
}

export interface ParticipantHeaderRowProps {
  sortParticipants: SortParticipantsFunction
  sortedBy: Column
}

export type ColumnTitleProps = {
  sorted: boolean
}
