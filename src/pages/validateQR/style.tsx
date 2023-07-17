import { Layout, Upload } from "antd"
import styled from "styled-components"

import { PageTitle } from "../../components/atomic_components/Text/variants"
import { backgroundGray, black } from "../../theme/color"
import media from '../../theme/media'


export const IndexContainer = styled(Layout)`
  background-color: ${backgroundGray};
  height: 100%;
`

export const IndexTitle = styled(PageTitle)`
  margin-top: 40px;
  margin-bottom: 16px;

  ${media.greaterThan('md')`
    margin-top: 80px;
  `}

  ${media.greaterThan('lg')`
    margin-top: 104px;
    margin-bottom: 36px;
  `}
`

export const IndexParagraph = styled.div`
  margin-bottom: 64px;
`

export const IndexUploadContainer = styled(Upload)`
  width: 100%;

  .ant-upload {
    width: 100%;
    margin-bottom: 33px;
  }
  .ant-btn {
    width: 100%;
  }
  .ant-upload-list {
    display: none;
  }
`

export const IndexSendContainer = styled.div`
  width: 100%;

  .ant-btn {
    color: ${black};
    width: 100%;
  }
`

export default IndexTitle