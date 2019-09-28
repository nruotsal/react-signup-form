import { Participant } from '../../AppTypes'

export type EditParticipantFunction = (id: string) => () => void

export type DeleteParticipantFunction = (id: string) => () => void

export type ParticipantRowProps = {
  participant: Participant
  editParticipant: EditParticipantFunction
  deleteParticipant: DeleteParticipantFunction
}
