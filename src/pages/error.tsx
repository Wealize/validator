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
              No encontramos este documento en la RedT de Alastria. <br />
              Por favor, confirma tu fichero y vuelve a intentarlo.
            </Paragraph>
          </ErrorParagraph>
        </Col>
      </Row>

      <Row>
        <Col
          xs={{ span: 20, push: 2 }}
          sm={{ span: 18, push: 3 }}
          lg={{ span: 10, push: 7 }}
        >
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
                Volver
              </Button>
            </PrimaryButton>
          </BackButtonContainer>
        </Col>
      </Row>
    </div>
  )
}

const ErrorTitle = styled.h2`
  margin-top: 100px;
  margin-bottom: 30px;
  line-height: 1.25;
  letter-spacing: -0.45px;
`

const ErrorParagraph = styled.div`
  margin-bottom: 1.5rem;
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
