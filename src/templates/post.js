import React from "react"
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Title = styled.h1`
  display: flex;
  color: purple;
`
const Content = styled.p`
    display: flex;
    color: red;
`

export default function Post (data) { 
    const { title, content } = data.data.contentfulPost
    return(
        <Container>
        <Title>{title}</Title>
        <Content>{content.raw}</Content>
        </Container>
    )
}

Post.propTypes = {
    data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
    query PostQuery($slug: String!){
        contentfulPost(slug: {eq: $slug}) {
            title
            slug
            
        }
    }
`