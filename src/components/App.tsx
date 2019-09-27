import React from 'react'
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

const App: React.FC = () => (
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
      <ParticipantList participants={randomParticipants(20)} />
    </MainSection>
  </>
)

export default App
