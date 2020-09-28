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
    const formData = await createFormData()
    setIsProcessingRequest(true)
    try {
      const { is_file_stored } = await ApiClient.verifyFile(formData)
      if (is_file_stored) {
        router.push('/success')
      } else {
        router.push('/error')
      }
    } catch (error) {
      router.push('/error')
    }
  }

  const createFormData = async () => {
    const formData = new FormData()
    formData.append('file', uploadedFile)
    return formData
  }

  const renderLoadingView = () => {
    return <Loader />
  }

  const renderUploadFileView = () => {
    return (
      <IndexContainer>
        <Row>
          <Col
            xs={{ span: 18, push: 2 }}
            sm={{ span: 16, push: 4 }}
            md={{ span: 18, push: 2 }}
            lg={{ span: 11, push: 2 }}
            xl={{ span: 10, push: 3 }}
          >
            <IndexTitle data-cy="title">
              Bienvenido al servicio de verificación de ficheros
            </IndexTitle>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 18, push: 2 }}
            sm={{ span: 16, push: 4 }}
            md={{ span: 18, push: 2 }}
            lg={{ span: 11, push: 2 }}
            xl={{ span: 10, push: 3 }}
          >
            <Paragraph>
              <IndexParagraph data-cy="first-paragraph">
                Mediante este servicio queremos brindarte la posibilidad de
                verificar que tu fichero está almacenado en una blockchain de
                una tercera parte (Alastria) y contiene las mismas condiciones.
                Con ese servicio queremos dar toda la transparencia posible
                haciendo seguro y confiable nuestros procesos.
              </IndexParagraph>
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 18, push: 2 }}
            sm={{ span: 16, push: 4 }}
            md={{ span: 18, push: 2 }}
            lg={{ span: 11, push: 2 }}
            xl={{ span: 10, push: 3 }}
          >
            <Paragraph>
              <IndexParagraph data-cy="second-paragraph">
                Para poder hacer la verificación adjunta el archivo y haz click
                en &quot;Subir fichero&quot;.
              </IndexParagraph>
            </Paragraph>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 18, push: 2 }}
            sm={{ span: 10, push: 4 }}
            md={{ span: 10, push: 2 }}
            lg={{ span: 6, push: 2 }}
            xl={{ span: 4, push: 3 }}
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
                  Seleccionar fichero
                </Button>
              </UploadButton>
            </IndexUploadContainer>
          </Col>
        </Row>

        <Row>
          <Col
            xs={{ span: 18, push: 2 }}
            sm={{ span: 10, push: 4 }}
            md={{ span: 10, push: 2 }}
            lg={{ span: 6, push: 2 }}
            xl={{ span: 6, push: 3 }}
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
                  Subir fichero
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

const IndexTitle = styled.h1`
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

const IndexParagraph = styled.p`
  margin-bottom: 32px;

  ${media.greaterThan('lg')`
  margin-bottom: 16px;
  `}
`

const IndexUploadContainer = styled(Upload)`
  width: 100%;

  .ant-upload {
    width: inherit;
    margin-bottom: 33px;
  }
  .ant-btn {
    width: inherit;
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
    width: inherit;
  }
`

export default FileVerification
