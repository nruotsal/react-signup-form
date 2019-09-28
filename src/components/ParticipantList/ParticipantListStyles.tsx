import styled from '@emotion/styled'

import { ReactComponent as EditSvg } from '../../icons/edit.svg'
import { ReactComponent as DeleteSvg } from '../../icons/delete.svg'
import { ReactComponent as DownSvg } from '../../icons/down.svg'
import { ColumnTitleProps } from './ParticipantListTypes'

export const ListContainer = styled.section`
  margin-top: 8px;
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 46px;
  border-bottom: 1px solid #ededee;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 600;
`

export const ColumnTitle = styled('span')<ColumnTitleProps>`
  color: ${ props => props.sorted ? '#515151' : '#757575' };
  margin-right: 16px;
  cursor: pointer;
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

export const ParticipantRowContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 71px;
  line-height: 71px;
  border-bottom: 1px solid #ededee;
  color: #505050;
  font-size: 16px;
  font-weight: 400;
  padding: 0 24px;
`

export const ColumnValue = styled.span`
  margin-right: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const NameColumnValue = styled(ColumnValue)`
  width: 164px;
`

export const EmailColumnValue = styled(ColumnValue)`
  width: 275px;
`

export const PhoneColumnValue = styled(ColumnValue)`
  width: 194px;
`

export const EditIcon = styled(EditSvg)`
  fill: #909090;
  height: 24px;
  width: 24px;
  margin-left: auto;
  cursor: pointer;
`

export const DeleteIcon = styled(DeleteSvg)`
  fill: #909090;
  height: 24px;
  width: 24px;
  margin-left: 35px;
  cursor: pointer;
`

export const DownIcon = styled(DownSvg)`
  fill: #515151;
  height: 14px;
  width: 14px;
  margin-left: 14px;
  vertical-align: middle;
`
