import { Column } from '../../AppTypes'

export type SortParticipantsFunction = (column: Column) => () => void

export type HeaderRowProps = {
  sortParticipants: SortParticipantsFunction
  sortedBy: Column
}

export type ColumnTitleProps = {
  sorted: boolean
}
