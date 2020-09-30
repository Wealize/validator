import React from 'react'
import { Col, Row, Spin } from 'antd'
import styled from 'styled-components'

import Paragraph from '../components/Paragraph'
import { primary, backgroundGray } from '../theme/color'
import media from '../theme/media'

const Loader = () => {
  return (
    <LoaderContainer align="middle" data-cy="loader-container">
      <Col span={24}>
        <SpinContainer>
          <Spin size="large" />
        </SpinContainer>
        <Row>
          <Col sm={{ span: 18, push: 3 }}>
            <LoaderParagraph>
              <Paragraph>
                Se está procediendo a la verificación de tu fichero.
              </Paragraph>
            </LoaderParagraph>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 18, push: 3 }}>
            <LoaderParagraph>
              <Paragraph>
                Por favor, no cierres la ventana de tu navegador.
              </Paragraph>
            </LoaderParagraph>
          </Col>
        </Row>
      </Col>
    </LoaderContainer>
  )
}

const LoaderContainer = styled(Row)`
  margin-top: -100px;
  background-color: ${backgroundGray};
  margin-bottom: auto;
  height: 100vh;

  ${media.greaterThan('lg')`
    margin-top: 0px;
  `}
`

const LoaderParagraph = styled.div`
  text-align: center;
  margin: 0 16px;
`

const SpinContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
  .ant-spin-dot-item {
    background-color: ${primary};
  }
`

export default Loader
