export type Participant = {
  id: string;
  name: string;
  email: string;
  phone: string;
  isEditing: boolean;
}

export type DeleteParticipantFunction = (id: string) => void

export interface ParticipantListProps {
  participants: Participant[];
  deleteParticipant: DeleteParticipantFunction;
}

export interface ParticipantRowProps {
  participant: Participant;
  deleteParticipant: DeleteParticipantFunction;
}

export type ColumnTitleProps = {
  width: string
}

export type ColumnValueProps = {
  width: string
}
