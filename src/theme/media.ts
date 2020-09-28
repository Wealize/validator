import { generateMedia } from 'styled-media-query'

// https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints
const media = generateMedia({
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
})

export default media
