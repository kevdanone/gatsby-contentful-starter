/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import { Normalize } from "styled-normalize"
import Header from "./header"
import "../styles/font.css"

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Play', sans-serif;
    }
`

const Layout = ({ children }) => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Header/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
