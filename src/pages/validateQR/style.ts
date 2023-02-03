import { Layout, Upload } from 'antd'
import styled from 'styled-components'
import {
  DescriptionText,
  PageTitle
} from '../../components/atomic_components/Text/variants'
import { backgroundGray, black } from '../../theme/color'
import media from '../../theme/media'

const ValidateQrStyles: any = {
  IndexContainer: styled(Layout)`
    background-color: ${backgroundGray};
    height: 100%;
  `,
  IndexTitle: styled(PageTitle)`
    margin-top: 40px;
    margin-bottom: 16px;

    ${media.greaterThan('md')`
      margin-top: 80px;
    `}

    ${media.greaterThan('lg')`
      margin-top: 104px;
      margin-bottom: 36px;
    `}
  `,
  IndexParagraph: styled(DescriptionText)`
    margin-bottom: 64px;
  `,
  IndexUploadContainer: styled(Upload)`
    width: 100%;

    css Copy code .ant-upload {
      width: 100%;
      margin-bottom: 33px;
    }
    .ant-btn {
      width: 100%;
    }
    .ant-upload-list {
      display: none;
    }
  `,

  IndexSendContainer: styled.div`
    width: 100%;

    css Copy code .ant-btn {
      color: ${black};
      width: 100%;
    }
  `
}

export default ValidateQrStyles
// export const IndexContainer = styled(Layout)`
//   background-color: ${backgroundGray};
//   height: 100%;
// `

// export const IndexTitle = styled(PageTitle)`
//   margin-top: 40px;
//   margin-bottom: 16px;

//   ${media.greaterThan('md')`
//     margin-top: 80px;
//   `}

//   ${media.greaterThan('lg')`
//     margin-top: 104px;
//     margin-bottom: 36px;
//   `}
// `

// export const IndexParagraph = styled(DescriptionText)`
//   margin-bottom: 64px;
// `

// export const IndexUploadContainer = styled(Upload)`
//   width: 100%;

//   .ant-upload {
//     width: 100%;
//     margin-bottom: 33px;
//   }
//   .ant-btn {
//     width: 100%;
//   }
//   .ant-upload-list {
//     display: none;
//   }
// `

// export const IndexSendContainer = styled.div`
//   width: 100%;

//   .ant-btn {
//     color: ${black};
//     width: 100%;
//   }
// `
