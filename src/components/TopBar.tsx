import React from 'react'
import styled from 'styled-components'

import media from '../theme/media'

const TopBar = () => {
  return (
    <TopBarContainer>
      <LogoImage src="izertis.png" />
    </TopBarContainer>
  )
}

const TopBarContainer = styled.section`
  background: white;
  height: 54px;
`

const LogoImage = styled.img`
  height: 24px;
  width: auto;
  margin: 1rem 0 1rem 2rem;

  ${media.greaterThan('md')`
    margin-left: 4rem;
  `}

  ${media.greaterThan('lg')`
    margin-left: 8.33%;
  `}

  ${media.greaterThan('xl')`
    margin-left: 12.5%;
  `}
`

export default TopBar
