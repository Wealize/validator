import React from 'react'
import App from 'next/app'
import { Reset } from 'styled-reset'

import 'antd/dist/antd.css'

import Head from '../components/Head'
import Global from '../components/Global'
import TopBar from '../components/TopBar'

class ExtendedApp extends App {
  public render() {
    const { Component, pageProps }:any = this.props

    return (
      <React.Fragment>
        <Head />
        <Reset />
        <Global />
        <TopBar/>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default ExtendedApp
