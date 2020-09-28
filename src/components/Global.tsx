import { createGlobalStyle } from 'styled-components'

import { black, blackHigh } from '../theme/color'
import media from '../theme/media'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }

  #__next {
    height: 100%;
  }

  h1 {
    color: ${black};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 28.8px;
    letter-spacing: -0.45px;
    line-height: 36px;

    ${media.greaterThan('md')`
    font-size: 48.83px;
    letter-spacing: -0.76px;
    line-height: 59px;
  `}
  }

  h2 {
    color: ${blackHigh};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 25.63px;
    letter-spacing: -0.21px;
    line-height: 34px;

    ${media.greaterThan('md')`
      font-size: 39.06px;
      letter-spacing: -0.33px;
      line-height: 19px;
  `}
  }
`

export default Global
