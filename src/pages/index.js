import React from 'react'
import get from 'lodash/get'
import {Image, Header} from 'semantic-ui-react'
import SEO from '../components/SEO'
import logo from '../images/ill-short-dark.svg'
import Layout from '../components/Layout'

  const siteTitle = get(data, 'site.siteMetadata.title')
  const Home = ({location}) => (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          <Image src={logo} alt="logo" />
        </Header.Content>
      </Header>
      Test Body
    </Layout>
)
    
export default StoreIndex
