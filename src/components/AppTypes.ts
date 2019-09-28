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

export type FormValues = {
  name: string
  email: string
  phone: string
}
