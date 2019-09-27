import styled from '@emotion/styled'

import { ReactComponent as EditSvg } from '../../icons/edit.svg';
import { ReactComponent as DeleteSvg } from '../../icons/delete.svg';
import { ColumnTitleProps, ColumnValueProps } from './ParticipantListTypes';

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
  color: #757575;
  font-size: 14px;
  font-weight: 600;
`

export const ColumnTitle = styled('span')<ColumnTitleProps>`
  width: ${props => props.width || '100%'};
  margin-right: 16px;
  cursor: pointer;
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

export const ColumnValue = styled('span')<ColumnValueProps>`
  width: ${props => props.width || '100%'};
  margin-right: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
