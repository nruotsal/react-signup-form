import React, { useState } from 'react'
import { Global } from '@emotion/core'
import 'normalize.css'

import randomParticipants from '../participants'
import ParticipantList from './ParticipantList/ParticipantList'
import { Participant, Column } from './AppTypes'
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
  const [participants, setParticipants] = useState(randomParticipants(20))
  const [sortedBy, setSortedBy] = useState(Column.name)

  const sortParticipants = (column: Column) => (): void => {
    setParticipants([...participants].sort(sortByColumn(column)))
    setSortedBy(column)
  }

  const sortByColumn = (key: Column) => (first: Participant, second: Participant): number =>
    first[key].localeCompare(second[key], undefined, { sensitivity: 'base' })

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

  const saveParticipant = (id: string) => (values: any): void => {
    setParticipants(participants.map(participant => participant.id === id
      ? { ...participant, ...values, isEditing: false }
      : participant
    ))
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
          <Title>Nord Software</Title>
        </HeaderContainer>
      </Header>
      <MainSection>
        <SubTitle>List of participants</SubTitle>
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
