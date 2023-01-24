import styled from 'styled-components'

const textStyle = `
  font-weight: ${({ title, bold }: any) => (title || bold ? 'bold' : 'normal')};
  text-align: ${({ alignJustify }: any) => (alignJustify ? 'justify' : 'left')};
`

export const pStyled = styled.p`
  ${textStyle}
`

export const H1Styled = styled.h1`
  ${textStyle}
`

export const H2Styled = styled.h2`
  ${textStyle}
`
