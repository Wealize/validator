import styled from 'styled-components'

import { black } from '../theme/color'
import { DescriptionText } from './atomic_components/Text/variants'

const Paragraph = styled(DescriptionText)`
  color: ${black};
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.44px;
  line-height: 28px;
`

export default Paragraph
