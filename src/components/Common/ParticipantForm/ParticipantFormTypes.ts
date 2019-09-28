import { FormikActions } from 'formik'
import { FormValues } from '../../AppTypes'

export type SubmitParticipantFormFunction = (
  values: FormValues,
  formikActions: FormikActions<FormValues>
) => void

export type ParticipantFormProps = {
  onSubmit: SubmitParticipantFormFunction
  initialValues: FormValues
}
