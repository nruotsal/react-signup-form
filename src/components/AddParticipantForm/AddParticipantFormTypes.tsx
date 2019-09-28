import { FormikActions } from 'formik'

export type AddParticipantFormValues = {
  name: string;
  email: string;
  phone: string;
}

export type AddParticipantFunction = (
  values: AddParticipantFormValues,
  formikActions: FormikActions<AddParticipantFormValues>
) => void

export interface AddParticipantFormProps {
  addParticipant: AddParticipantFunction;
}
