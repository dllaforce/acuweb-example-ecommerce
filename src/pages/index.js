import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Home = ({location}) => (
    <Layout location={location}>
    <SEO title="Home" />
    <h1>Home</h1>
      <p>Welcome Home</p>
    </Layout>
)
    
export default Home
