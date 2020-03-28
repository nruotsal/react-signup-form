import { FormikHelpers } from 'formik'
import { FormValues } from '../../AppTypes'

export type SubmitParticipantFormFunction = (
  values: FormValues,
  formikActions: FormikHelpers<FormValues>
) => void

export type ParticipantFormProps = {
  onSubmit: SubmitParticipantFormFunction
  initialValues: FormValues
}
