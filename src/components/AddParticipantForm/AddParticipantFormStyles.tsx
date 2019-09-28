import styled from '@emotion/styled'
import { Form, Field } from 'formik'

export const FormContainer = styled.section`
  border-bottom: 1px solid #ededee;
  background: #ffffff;
  padding: 16px;
`

export const AddForm = styled(Form)`
  display: flex;
`

export const FormField = styled(Field)`
  height: 38px;
  padding: 0 15px 0 15px;
  border: 1px solid ${props => props.error ? '#df5617' : '#ededee'};
  background: #fafafa;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  margin-right: 16px;
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

export const AddButton = styled.button`
  background: #ececec;
  color: #747474;
  height: 40px;
  width: 110px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
`
