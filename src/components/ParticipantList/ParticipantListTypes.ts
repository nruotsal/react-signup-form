export type Participant = {
  id: string;
  name: string;
  email: string;
  phone: string;
  isEditing: boolean;
}

export interface ParticipantListProps {
  participants: Participant[];
}

export interface ParticipantRowProps {
  participant: Participant;
}

export type ColumnTitleProps = {
  width: string
}

export type ColumnValueProps = {
  width: string
}
