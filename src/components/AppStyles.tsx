import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f1f1f1;
  }
`

export const Header = styled.header`
  background: #aeb3bb;
  height: 96px;
  line-height: 96px;
  padding: 0 32px;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 912px;
  margin: auto;
`

export const Logo = styled.div`
  display: inline;
  height: 32px;
  width: 32px;
  background: #ffffff;
`

export const Title = styled.h1`
  color: #ffffff;
  margin: 0 0 0 16px;
  font-size: 23px;
  font-weight: 600;
`

export const SubTitle = styled.h2`
  color: #747474;
  margin-bottom: 35px;
  font-size: 23px;
  font-weight: 600;
`

export const MainSection = styled.main`
  max-width: 912px;
  margin: 68px auto 96px auto;
  padding: 0 32px;
`
