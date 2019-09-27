import React, { useState } from 'react'
import { Global } from '@emotion/core'
import 'normalize.css'

import randomParticipants from '../participants'
import ParticipantList from './ParticipantList/ParticipantList'
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

  const deleteParticipant = (id: string): void => {
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
          deleteParticipant={deleteParticipant}
        />
      </MainSection>
    </>
  )
}

export default App
