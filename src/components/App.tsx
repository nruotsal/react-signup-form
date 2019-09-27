import React, { Fragment } from 'react'
import { Global } from '@emotion/core'
import 'normalize.css'

import {
  globalStyles,
  Header,
  HeaderContainer,
  Logo,
  Title,
} from './AppStyles'

const App: React.FC = () => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Header>
        <HeaderContainer>
          <Logo />
          <Title>Nord Software</Title>
        </HeaderContainer>
      </Header>
    </Fragment>
  )
}

export default App
