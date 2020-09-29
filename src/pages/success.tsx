/* eslint-disable no-unused-expressions */
import React from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { Button, Col, Row } from 'antd'
import styled from 'styled-components'

import { primary, black } from '../theme/color'
import Paragraph from '../components/Paragraph'
import PrimaryButton from '../components/PrimaryButton'

const SuccessPage = () => {
  const router = useRouter()

  return (
    <div>
      <Row>
        <Col
          xs={{ span: 18, push: 3 }}
          sm={{ span: 18, push: 3 }}
          lg={{ span: 14, push: 5 }}
          xl={{ span: 10, push: 7 }}
        >
          <SuccessTitle data-cy="title">
            Tu documento ha sido contrastado
          </SuccessTitle>
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 18, push: 3 }}
          sm={{ span: 18, push: 3 }}
          lg={{ span: 10, push: 7 }}
        >
          <SuccessParagraph data-cy="first-paragraph">
            <Paragraph>
              El proceso ha sido llevado cabo con éxito. <br />
              Tu documento corresponde con una notarización en la RedT de
              Alastria.
            </Paragraph>
          </SuccessParagraph>
        </Col>
      </Row>

      <Row>
        <Col
          xs={{ span: 18, push: 3 }}
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
                Verificar otro fichero
              </Button>
            </PrimaryButton>
          </BackButtonContainer>
        </Col>
      </Row>
    </div>
  )
}

const SuccessTitle = styled.h2`
  margin-top: 100px;
  margin-bottom: 30px;
  line-height: 1.25;
  letter-spacing: -0.45px;
`

const SuccessParagraph = styled.div`
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

export default SuccessPage
