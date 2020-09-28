import styled from 'styled-components'

import { primary, black, white } from '../theme/color'

const PrimaryButton = styled.div`
  .ant-btn {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.44px;
    line-height: 28px;
    background-color: ${primary};
    border-color: ${primary};
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgb(173, 225, 225);
    color: ${black};
  }

  button:disabled {
    border: 1px solid rgb(217, 217, 217);
    background: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.25);
    box-shadow: none;
  }

  button:hover {
    background: #5ce5e2;
    border: 1px solid #5ce5e2;
  }

  button:active,
  button:focus {
    background: #008281;
    color: ${white};
  }
`

export default PrimaryButton
