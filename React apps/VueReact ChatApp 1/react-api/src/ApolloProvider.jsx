// src/ApolloProvider.jsx
import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const ApolloWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloWrapper;