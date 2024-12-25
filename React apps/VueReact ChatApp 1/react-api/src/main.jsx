// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ApolloWrapper from './ApolloProvider';

createRoot(document.getElementById('root')).render(<ApolloWrapper />);
