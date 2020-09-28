import styled from 'styled-components'

import { disabledGray } from '../theme/color'

const UploadButton = styled.div`
  .ant-btn {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    border-color: ${disabledGray};
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(3, 178, 176, 0.1);
    color: rgba(0, 0, 0, 0.65);
  }

  button:disabled {
    border: 1px solid rgb(217, 217, 217);
    background: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.25);
    box-shadow: none;
  }

  button:hover {
    border: 1px solid #03b2b0;
    color: #03b2b0;
  }

  button:active {
    border: 1px solid #03b2b0;
    color: #008281;
  }
`

export default UploadButton
