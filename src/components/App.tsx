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

  const deleteParticipant = (id: string) => (): void => {
    setParticipants(participants.filter(participant => participant.id !== id))
  }

  const sortParticipants = (column: Column) => (): void => {
    setParticipants([...participants].sort(sortByColumn(column)))
    setSortedBy(column)
  }

  const sortByColumn = (key: Column) => (first: Participant, second: Participant): number =>
    first[key].localeCompare(second[key], undefined, { sensitivity: 'base' })

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
          deleteParticipant={deleteParticipant}
        />
      </MainSection>
    </>
  )
}

export default App
