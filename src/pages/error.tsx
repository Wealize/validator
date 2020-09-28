/* eslint-disable no-unused-expressions */
import React from 'react'
import { useRouter } from 'next/router'
import { Button, Col, Row } from 'antd'
import styled from 'styled-components'

import { primary, black } from '../theme/color'
import PrimaryButton from '../components/PrimaryButton'
import Paragraph from '../components/Paragraph'

const ErrorPage = () => {
  const router = useRouter()

  return (
    <div>
      <Row>
        <Col
          xs={{ span: 22, push: 1 }}
          sm={{ span: 18, push: 3 }}
          lg={{ span: 14, push: 5 }}
          xl={{ span: 10, push: 7 }}
        >
          <ErrorTitle data-cy="title">Error en la verificación</ErrorTitle>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 20, push: 2 }}
          sm={{ span: 18, push: 3 }}
          lg={{ span: 10, push: 7 }}
        >
          <ErrorParagraph data-cy="first-paragraph">
            <Paragraph>
              El fichero no corresponde con el almacenado en blockchain
            </Paragraph>
          </ErrorParagraph>
        </Col>
      </Row>

      <Row justify={'center'}>
        <BackButtonContainer>
          <PrimaryButton>
            <Button
              size="large"
              data-cy="send-button"
              type="primary"
              onClick={() => {
                router.push('/')
              }}
            >
              Verificar otro fichero
            </Button>
          </PrimaryButton>
        </BackButtonContainer>
      </Row>
    </div>
  )
}

const ErrorTitle = styled.h2`
  margin-top: 100px;
  text-align: center;
  margin-bottom: 30px;
`

const ErrorParagraph = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const BackButtonContainer = styled.div`
  margin-bottom: 100px;

  .ant-btn {
    background-color: ${primary};
    border-color: ${primary};
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgb(173, 225, 225);
    color: ${black};
  }
`

export default ErrorPage
