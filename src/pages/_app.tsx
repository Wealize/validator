import React from 'react'
import App from 'next/app'
import { Reset } from 'styled-reset'

import 'antd/dist/antd.css'

import Head from '../components/Head'
import Global from '../components/Global'

class ExtendedApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head />
        <Reset />
        <Global />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default ExtendedApp
