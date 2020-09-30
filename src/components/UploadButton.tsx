import styled from 'styled-components'

import { disabledGray, primary } from '../theme/color'

const UploadButton = styled.div`
  .ant-btn {
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    border-color: ${disabledGray};
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(3, 178, 176, 0.1);
    color: rgba(0, 0, 0, 0.65);
  }

  button:hover {
    border: 1px solid ${primary};
    color: ${primary};
  }

  button:active {
    border: 1px solid ${primary};
    color: ${primary};
  }
`

export default UploadButton
