import React, { useState } from 'react'
import { Global } from '@emotion/core'
import { FormikHelpers } from 'formik'
import 'normalize.css'

import { generateUUID } from '../services/uuid'
import randomParticipants from '../services/participants'
import ParticipantList from './ParticipantList/ParticipantList'
import AddParticipantForm from './AddParticipantForm/AddParticipantForm'
import { Participant, Column, FormValues } from './AppTypes'

import {
  globalStyles,
  Header,
  HeaderContainer,
  Logo,
  Title,
  MainSection,
  SubTitle
} from './AppStyles'

const App: React.FC = () => {
  const sortByColumn = (key: Column) => (first: Participant, second: Participant): number =>
    first[key].localeCompare(second[key], undefined, { sensitivity: 'base' })

  const [sortedBy, setSortedBy] = useState(Column.name)
  const [participants, setParticipants] = useState(randomParticipants(20).sort(sortByColumn(sortedBy)))

  const sortParticipants = (column: Column) => (): void => {
    setParticipants([...participants].sort(sortByColumn(column)))
    setSortedBy(column)
  }

  const addParticipant = (values: FormValues, { resetForm }: FormikHelpers<FormValues>): void => {
    resetForm()
    setParticipants(
      [...participants, { id: generateUUID(), isEditing: false, ...values }]
        .sort(sortByColumn(sortedBy)))
  }

  const editParticipant = (id: string) => (): void => {
    setParticipants(participants.map(participant => participant.id === id
      ? { ...participant, isEditing: true }
      : participant
    ))
  }

  const cancelEdit = (id: string) => (): void => {
    setParticipants(participants.map(participant => participant.id === id
      ? { ...participant, isEditing: false }
      : participant
    ))
  }

  const saveParticipant = (id: string) => (values: FormValues): void => {
    setParticipants(participants.map(participant => participant.id === id
      ? { ...participant, ...values, isEditing: false }
      : participant
    ).sort(sortByColumn(sortedBy)))
  }

  const deleteParticipant = (id: string) => (): void => {
    setParticipants(participants.filter(participant => participant.id !== id))
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Header>
        <HeaderContainer>
          <Logo />
          <Title>Nikoru Software</Title>
        </HeaderContainer>
      </Header>
      <MainSection>
        <SubTitle>List of participants</SubTitle>
        <AddParticipantForm addParticipant={addParticipant} />
        <ParticipantList
          participants={participants}
          sortedBy={sortedBy}
          sortParticipants={sortParticipants}
          editParticipant={editParticipant}
          cancelEdit={cancelEdit}
          saveParticipant={saveParticipant}
          deleteParticipant={deleteParticipant}
        />
      </MainSection>
    </>
  )
}

export default App
