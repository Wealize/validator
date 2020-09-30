import styled from 'styled-components'

import { primary, white } from '../theme/color'

const PrimaryButton = styled.div`
  .ant-btn {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.44px;
    line-height: 28px;
    background-color: ${primary};
    border-color: ${primary};
    border-radius: 20px !important;
    color: ${white} !important;
  }

  button:disabled {
    border: 1px solid #cccccc;
    background: #cccccc;
    color: ${white};
    box-shadow: none;
  }

  button:active,
  button:focus,
  button:hover {
    background: #1c3bcb;
    color: ${white};
  }
`

export default PrimaryButton
