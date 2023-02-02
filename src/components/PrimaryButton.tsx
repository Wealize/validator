import styled from 'styled-components'

import { primary, white } from '../theme/color'

export const PrimaryButton = styled.div`
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
    background: #e92120;
    color: ${white};
  }
`

export const InversePrimaryButton = styled.div`
  .ant-btn {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.44px;
    line-height: 28px;
    background-color: ${white};
    border-color: ${primary};
    border-radius: 20px !important;
    color: ${primary} !important;
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
    background: #f2f2f2;
    color: ${white};
  }
`

