import styled from '@emotion/styled'

import { ReactComponent as DownSvg } from '../../../icons/down.svg'
import { ColumnTitleProps } from './HeaderRowTypes'

export const HeaderRowContainer = styled.div`
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #ededee;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  height: 46px;
  padding: 0 24px;
`

export const ColumnTitle = styled('span')<ColumnTitleProps>`
  color: ${props => props.sorted ? '#515151' : '#757575'};
  cursor: pointer;
  margin-right: 16px;
`

export const NameColumnTitle = styled(ColumnTitle)`
  width: 164px;
`

export const EmailColumnTitle = styled(ColumnTitle)`
  width: 275px;
`

export const PhoneColumnTitle = styled(ColumnTitle)`
  width: 194px;
`

export const DownIcon = styled(DownSvg)`
  fill: #515151;
  height: 14px;
  margin-left: 10px;
  vertical-align: middle;
  width: 14px;
`
