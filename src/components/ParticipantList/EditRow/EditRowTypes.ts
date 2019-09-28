import { Participant } from '../../AppTypes'
import {
  SubmitParticipantFormFunction
} from '../../Common/ParticipantForm/ParticipantFormTypes'

export type SaveParticipantFunction = (id: string) => SubmitParticipantFormFunction

export type CancelEditFunction = (id: string) => () => void

export type EditRowProps = {
  participant: Participant
  saveParticipant: SaveParticipantFunction
  cancelEdit: CancelEditFunction
}
