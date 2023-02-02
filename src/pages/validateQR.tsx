/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

const ValidateQR: NextPage<{}> = () => {
  const [isProcessingRequest, setIsProcessingRequest] = useState(false)
  const router = useRouter()
  const uuid = router.query.id as string
  const sendIdentifier = async (uuid) => {
    let ipfsURL
    try {
      if (uuid) {
        setIsProcessingRequest(true)
        const response: any = await ApiClient.getIPSFFromUuid(uuid)
        const ipfsStatus = response?.status
        const ipfsError = response?.error
        const ipfsMessage = response?.message
        ipfsURL = response?.ipfsURL
        if (ipfsStatus != 404 && ipfsMessage === 'OK') {
          const fileName = `${uuid}.pdf`;
          const responseBlobIpfsFile = await axios({
            url: ipfsURL,
            method: 'GET',
            responseType: 'blob' // important
          })
       
          try {
            const file = new File([responseBlobIpfsFile.data], fileName)
            const responseVerifyFile: any = await ApiClient.verifyFile(file)
            const { error, message, hash, url }: any = responseVerifyFile
            if (message == 'OK') {
              router.push(
                `/success?timestamp=${url}&transactionHash=${hash}`,
                '/success'
              )
            } else {
              const errorCode = ApiClient.getErrorCode(error)
              router.push(`/error?error=${errorCode}`)
            }
          } catch (error) {
            console.error("🚀 ~ file: validateQR.tsx:71 ~ sendIdentifier ~ error", error)
            const errorCode = ApiClient.getErrorCode(error)
            router.push(`/error?error=${errorCode}`)
          }
        } else if (ipfsError === ApiClient.API_ERRORS.NOT_FOUND_UUID) {
          router.push(`/error?error=${ipfsError}`)
        }
      }
    } catch (error) {
      console.error("🚀 ~ file: validateQR.tsx:79 ~ sendIdentifier ~ error", error)
      const errorCode = ApiClient.getErrorCode(error)
      router.push(`/error?error=${errorCode}`)
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
              Bienvenido/a al servicio de verificación de QR's
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
                identificador previamente notarizado en la RedT de Alastria.{' '}
                <br />
                Para poder hacer la verificación haz click en “ENVIAR”.
              </IndexParagraph>
            </Paragraph>
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
                  onClick={() => sendIdentifier(uuid)}
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

export default ValidateQR
