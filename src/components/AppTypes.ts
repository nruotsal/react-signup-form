export type Participant = {
  id: string
  name: string
  email: string
  phone: string
  isEditing: boolean
}

export enum Column {
  name = 'name',
  email = 'email',
  phone = 'phone'
}
