import styled from '@emotion/styled'
import { Form, Field } from 'formik'

export const FormContainer = styled(Form)`
  align-items: center;
  display: flex;
  width: 100%;
`

const FormField = styled(Field)`
  background: #fafafa;
  border: 1px solid ${props => props.error ? '#df5617' : '#ededee'};
  box-sizing: border-box;
  color: #505050;
  font-size: 16px;
  height: 38px;
  margin-right: 16px;
  outline: none;
  padding: 0 15px 0 15px;
`

export const NameFormField = styled(FormField)`
  width: 164px;
`

export const EmailFormField = styled(FormField)`
  width: 275px;
`

export const PhoneFormField = styled(FormField)`
  width: 194px;
`
