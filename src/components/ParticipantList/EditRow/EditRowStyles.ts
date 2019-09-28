import styled from '@emotion/styled'

export const FormContainer = styled.div`
  background: #ffffff;
  border-bottom: 1px solid #ededee;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  height: 72px;
  padding: 0 16px;
`

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  outline: none;
  padding: 0;
`

export const CancelButton = styled(Button)`
  background: #ececec;
  color: #4376fb;
  margin-left: auto;
  width: 85px;
`

export const SaveButton = styled(Button)`
  background: #4376fb;
  color: #ffffff;
  margin-left: 7px;
  width: 79px;
`
