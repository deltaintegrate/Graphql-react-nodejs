import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, HttpLink, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3001/graphql',
  })
})

const query = gql`
  query {
    getAllNumbers{
      id
      numero1
      numero2
      ResponseValue
    }
  }
`

client.query({query}).then(res =>{
  console.log(res.data);
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
