/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Upload, Layout, Col, Row } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import ApiClient from '../../services/ApiClient'
import Loader from '../../components/Loader'
import Paragraph from '../../components/Paragraph'
import {
  InversePrimaryButton,
  PrimaryButton
} from '../../components/PrimaryButton'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import {
  IndexContainer,
  IndexTitle,
  IndexParagraph,
  IndexSendContainer
} from './style'

const ValidateQR: NextPage<{}> = () => {
  const [uploadedFile, setUploadedFile] = useState<File>()
  const [isProcessingRequest, setIsProcessingRequest] = useState(false)
  const router = useRouter()
  const uuid = router.query.id as string
  useEffect(() => {
    try {
      getFileFromUuid(uuid)
    } catch (error) {
      // console.log('error', error)
    }
  }, [uuid])

  const getFileFromUuid = async (uuid: string, isDownload?: boolean) => {
    try {
      let ipfsURL
      if (uploadedFile) {
        if (isDownload) {
          const fileName = `${uuid || 'file'}.pdf`
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(uploadedFile)
          link.download = fileName
          link.click()
        }
        return { file: uploadedFile }
      } else if (uuid) {
        const response: any = await ApiClient.getIPSFFromUuid(uuid)
        const ipfsStatus = response?.status
        const ipfsError = response?.error
        const ipfsMessage = response?.message
        ipfsURL = response?.ipfsURL
        if (ipfsStatus != 404 && ipfsMessage === 'OK') {
          const file: any = await ApiClient.generateFile(
            ipfsURL,
            uuid,
            isDownload
          )
          setUploadedFile(file)
          return { file }
        } else return { file: null, ipfsError }
      }
    } catch (error) {
      if (isDownload) {
        NotificationManager.error(
          'Error, el identificador introducido no tiene asociado ningún documento',
          '',
          5000,
          () => {
            alert('callback')
          }
        )
      } else {
        throw error
      }
    }
  }

  const sendIdentifier = async (uuid) => {
    try {
      if (uuid) {
        setIsProcessingRequest(true)
        const { file, ipfsError } = await getFileFromUuid(uuid)
        if (ipfsError) {
          const errorCode = ApiClient.getErrorCode(ipfsError)
          router.push(`/error?error=${errorCode}`)
          return
        }
        const responseVerifyFile: any = await ApiClient.verifyFile(file)
        const { error, message, hash, url, timestamp }: any = responseVerifyFile
        if (message == 'OK') {
          router.push(
            `/success?timestamp=${timestamp}&url=${url}&hash=${hash}`,
            '/success'
          )
        } else {
          const errorCode = ApiClient.getErrorCode(error)
          router.push(`/error?error=${errorCode}`)
        }
      }
    } catch (error) {
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
              Te damos la bienvenida al Servicio de Verificación de documentos
              en blockchain
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
                Izertis te permite contrastar cualquier documento notarizado en
                blockchain en la Red T de Alastria.
                <br />
                Para verificar el documento del que has escaneado el QR, debes
                pulsar el botón VERIFICAR. Si lo deseas, puedes descargarte una
                copia del mismo en el botón DESCARGAR.
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
                  Verificar
                </Button>
              </PrimaryButton>
            </IndexSendContainer>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col
            xs={{ span: 10, push: 2 }}
            md={{ span: 5, push: 2 }}
            lg={{ span: 4, push: 2 }}
            xl={{ span: 3, push: 3 }}
            xxl={{ span: 2, push: 3 }}
          >
            <IndexSendContainer>
              <InversePrimaryButton>
                <Button
                  size="large"
                  data-cy="send-button"
                  type="primary"
                  onClick={() => getFileFromUuid(uuid, true)}
                >
                  Descargar
                </Button>
              </InversePrimaryButton>
            </IndexSendContainer>
          </Col>
        </Row>
        <NotificationContainer />
      </IndexContainer>
    )
  }

  return isProcessingRequest ? renderLoadingView() : renderUploadFileView()
}

export default ValidateQR
