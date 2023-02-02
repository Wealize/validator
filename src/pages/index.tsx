/* eslint-disable camelcase */
import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Upload, Layout, Col, Row } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import ApiClient from '../services/ApiClient'
import Loader from '../components/Loader'
import Paragraph from '../components/Paragraph'
import PrimaryButton from '../components/PrimaryButton'
import UploadButton from '../components/UploadButton'
import { backgroundGray, primary, black } from '../theme/color'
import media from '../theme/media'
import {
  DescriptionText,
  PageTitle
} from '../components/atomic_components/Text/variants'

const FileVerification: NextPage<{}> = () => {
  const [uploadedFile, setUploadedFile] = useState<File>()
  const [fileIsLoaded, setFileIsLoaded] = useState(false)
  const [isProcessingRequest, setIsProcessingRequest] = useState(false)
  const router = useRouter()

  const onFileChange = (file: File) => {
    setUploadedFile(file)
    setFileIsLoaded(true)
    return false
  }

  const uploadFile = async () => {
    setIsProcessingRequest(true)
    try {
      const { error, message, hash, url }:any = await ApiClient.verifyFile(uploadedFile)
      if (message=="OK") {
        router.push(
          `/success?timestamp=${url}&transactionHash=${hash}`,
          '/success'
        )
      } else {
        router.push('/error?error='+error)
      }
    } catch (error) {
      router.push('/error?error='+error)
    }

  }

  const renderLoadingView = () => {
    return <Loader />
  }

  const renderUploadFileView = () => {
    return (
      <IndexContainer>
        <Row>
          <Col
            xs={{ span: 20, push: 2 }}
            lg={{ span: 14, push: 2 }}
            xl={{ span: 14, push: 3 }}
          >
            <IndexTitle data-cy="title">
              Bienvenido/a al servicio de verificación de documentos
            </IndexTitle>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 20, push: 2 }}
            lg={{ span: 14, push: 2 }}
            xl={{ span: 10, push: 3 }}
          >
            <Paragraph>
              <IndexParagraph data-cy="first-paragraph">
                Izertis te permite contrastar un documento en tu poder con un
                documento previamente notarizado en la RedT de Alastria. <br />
                Para poder hacer la verificación adjunta tu archivo y haz click
                en “ENVIAR”.
              </IndexParagraph>
            </Paragraph>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 14, push: 2 }}
            md={{ span: 7, push: 2 }}
            lg={{ span: 6, push: 2 }}
            xl={{ span: 4, push: 3 }}
            xxl={{ span: 3, push: 3 }}
          >
            <IndexUploadContainer
              data-cy="upload-input"
              multiple={false}
              name="file"
              beforeUpload={onFileChange}
            >
              <UploadButton>
                <Button data-cy="upload-button">
                  <UploadOutlined />
                  Adjuntar documento
                </Button>
              </UploadButton>
            </IndexUploadContainer>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 10, push: 2 }}
            md={{ span: 5, push: 2 }}
            lg={{ span: 4, push: 2 }}
            xl={{ span: 3, push: 3 }}
            xxl={{ span: 2, push: 3 }}
          >
            <IndexSendContainer>
              <PrimaryButton>
                <Button
                  size="large"
                  data-cy="send-button"
                  type="primary"
                  disabled={!fileIsLoaded}
                  onClick={uploadFile}
                >
                  Enviar
                </Button>
              </PrimaryButton>
            </IndexSendContainer>
          </Col>
        </Row>
      </IndexContainer>
    )
  }

  return isProcessingRequest ? renderLoadingView() : renderUploadFileView()
}

const IndexContainer = styled(Layout)`
  background-color: ${backgroundGray};
  height: 100%;
`

const IndexTitle = styled(PageTitle)`
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

const IndexParagraph = styled(DescriptionText)`
  margin-bottom: 64px;
`

const IndexUploadContainer = styled(Upload)`
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

const IndexSendContainer = styled.div`
  width: 100%;

  .ant-btn {
    background-color: ${primary};
    color: ${black};
    width: 100%;
  }
`

export default FileVerification
