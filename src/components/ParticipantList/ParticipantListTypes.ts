import { FormikActions } from 'formik'

import { Participant, Column } from '../AppTypes'

export type EditParticipantFunction = (id: string) => () => void

export type DeleteParticipantFunction = (id: string) => () => void

export type SortParticipantsFunction = (column: Column) => () => void

export type FormValues = {
  name: string
  email: string
  phone: string
}

export type SubmitFormFunction = (
  values: FormValues,
  formikActions: FormikActions<FormValues>
) => void

export type SaveParticipantFunction = (id: string) => SubmitFormFunction

export type CancelEditFunction = (id: string) => () => void

export interface ParticipantListProps {
  participants: Participant[]
  editParticipant: EditParticipantFunction
  saveParticipant: SaveParticipantFunction
  cancelEdit: CancelEditFunction
  deleteParticipant: DeleteParticipantFunction
  sortParticipants: SortParticipantsFunction
  sortedBy: Column
}

export interface ParticipantRowProps {
  participant: Participant
  editParticipant: EditParticipantFunction
  deleteParticipant: DeleteParticipantFunction
}

export interface ParticipantRowEditProps {
  participant: Participant
  saveParticipant: SaveParticipantFunction
  cancelEdit: CancelEditFunction
}

export interface ParticipantHeaderRowProps {
  sortParticipants: SortParticipantsFunction
  sortedBy: Column
}

export type ColumnTitleProps = {
  sorted: boolean
}
